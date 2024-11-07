---
sidebarPosition: 3
sidebarParentPosition: 3
---

# Overview 

::: danger 
Documentation here is over 8 years old! The approach is not presently maintained, however updating it to work, or taking a similar more modern approach, should still be feasible.
:::

The approach assumed:
* You are deploying with [Capistrano.](https://capistranorb.com/)
* You have two machines, "deploy" and "server", in this example both are Ubuntu 14.04(+) LTS (not 14.10)
* You are resonably capable with a command line environment*
* You have "provisioned" production with the pertinent shell script
* Your "deploy" machine has Ruby, bundler and rubygems installed
* You can ssh without password to your "server"
* Instructions containing all cap values are variables that you must replace (e.g. USERNAME)
* Configure "Server" first, "Deploy" second

## The Server

Thanks to [Rob Mclarty's blog post](https://robmclarty.com/words/articles/how_to_deploy_a_rails_4_app_with_git_and_capistrano/) for the general strategy.

::: tip
Ensure that you can login via ssh with the user that will deploy taxonworks, you can find many places to describe howto set this up.
:::

A shell script to configure the Server (note the very outdated version) was something like:

```bash
#!/bin/bash

# Target is Ubuntu 14.04

sudo apt-get update

# Build environment
sudo apt-get -y install git gcc nodejs build-essential libffi-dev libgdbm-dev libncurses5-dev libreadline-dev libssl-dev libyaml-dev zlib1g-dev libcurl4-openssl-dev 

# Postgres
sudo apt-get install -y libpq-dev libproj-dev libgeos-dev libgeos++-dev postgis* postgresql

#  ImageMagick
sudo apt-get install -y pkg-config imagemagick libmagickcore-dev libmagickwand-dev 

# Tesseract
sudo apt-get install -y tesseract-ocr

# cmake
sudo apt-get install -y cmake

# Rbenv  
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build

source ~/.bashrc

CONFIGURE_OPTS="--with-readline-dir=/usr/include/readline" rbenv install 2.3.1 
rbenv global 2.3.1

# Bundler
sudo apt-get -y install bundler

rbenv exec gem install bundler  --no-ri --no-rdoc
rbenv rehash

# apt-get Passenger config
# https://www.phusionpassenger.com/documentation/Users%20guide%20Nginx.html#install_on_debian_ubuntu
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 561F9B9CAC40B2F7
sudo apt-get install apt-transport-https ca-certificates

echo 'deb https://oss-binaries.phusionpassenger.com/apt/passenger trusty main' | sudo tee /etc/apt/sources.list.d/passenger.list  > /dev/null
sudo chown root: /etc/apt/sources.list.d/passenger.list
sudo chmod 655 /etc/apt/sources.list.d/passenger.list
sudo apt-get update

sudo apt-get install -y nginx-extras passenger


# Manually complete:
# Edit /etc/nginx/nginx.conf and uncomment passenger_root and passenger_ruby. 
# sudo service nginx restart

```


#### Add a group
```
sudo groupadd deployers
sudo usermod -a -G deployers USERNAME 
```

```
sudo mkdir /var/www
sudo mkdir /var/www/taxonworks
sudo mkdir /var/www/taxonworks/shared
sudo mkdir var/www/taxonworks/shared/config/
sudo chown -R USERNAME:deployers /var/www
sudo chmod -R g+w /var/www
```

#### Configure postgres
```
sudo -u postgres psql postgres

alter user postgres with password 'PASSWORD1';
create role taxonworks_production login createdb superuser;
alter user taxonworks_production with password 'PASSWORD2';
```

Configure nginx to point to your passenger ruby, in ```/etc/nginx/nginx.conf``` add/edit the line (change USERNAME!):

```
  passenger_ruby /home/USERNAME/.rbenv/shims/ruby;
```

Set permissions for nginx

```
sudo chmod g+x,o+x /var/www/taxonworks/current/config.ru
sudo chmod g+x,o+x /var/www/taxonworks
sudo chmod g+x,o+x /var/www
sudo chmod g+x,o+x /var/www/taxonworks/current/public
```

Create nginx site

* Add an an available site to /etc/nginx/sites-enabled (see example here)
* Within /etc/nginx/sites-avaiable create a symbolic link

```
sudo ln -ls ../sites-available/taxonworks taxonworks
```

## On "Deploy"

#### Clone the master branch of TaxonWorks.
```
  git clone https://github.com/SpeciesFileGroup/taxonworks.git
```

#### Install capistrano 
```
  gem install capistrano
```

#### Create a new branch, inside your taxonworks folder:
```
  git branch capistrano
```

#### Checkout that branch 
```
  git checkout capistrano
```

#### Run capistrano to setup "capify" taxonworks 
```
 bundle exec cap install
```
This creates a ```config/deploy``` directory, and some sample files.

#### Configure the capistrano files

```ruby

# config/deploy.rb

lock '3.4.0'

#set :rbenv_type, :user

set :rbenv_ruby, File.read('.ruby-version').strip
set :application, 'taxonworks'
set :repo_url, 'git@github.com:SpeciesFileGroup/taxonworks.git'

set :linked_files, %w{config/database.yml config/application_settings.yml config/secrets.yml}
set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system public/images/tmp}

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      # run "touch #{current_release}/tmp/restart.txt"
       execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end
end

namespace :setup do

  desc "Check that we can access everything"
  task :check_write_permissions do
    on roles(:all) do |host|
      if test("[ -w #{fetch(:deploy_to)} ]")
        info "#{fetch(:deploy_to)} is writable on #{host}"
      else
        error "#{fetch(:deploy_to)} is not writable on #{host}"
      end
    end
  end

  desc "Upload database.yml file."
  task :upload_yml do
    on roles(:app) do
      execute "mkdir -p #{shared_path}/config"
      upload! StringIO.new(File.read("config/database.yml")), "#{shared_path}/config/database.yml"
    end
  end
  
end
```

Minimally, modify ```production.rb``` to point to your machine, and to use your USERNAME:

```ruby
# production.rb

set :stage, :production
set :deploy_to, '/var/www/taxonworks'
set :user, fetch(:remote_user) 

# EDIT THIS LINE: 
server 'your.server.org', roles: %w{app web db}, user: 'username_from_production', primary: true
set :use_sudo, false
```

Add something like this to your nginx/sites-available/taxonworks file on your server:

```nginx
server {
  listen 80 default_server;
  server_name your.server.name.or.ip; 
  passenger_enabled on;
  passenger_app_env production;
  root /var/www/taxonworks/current/public; 
}
```

#### Copy config files
```
scp config/database.yml USERNAME@SERVERNAME:/var/www/taxonworks/shared/config/database.yml
scp config/application_settings.yml USERNAME@SERVERNAME:/var/www/taxonworks/shared/config/application_settings.yml
```

#### Deploy
Inside your taxonworks directory, with the capistrano branch checkout out
```
cap production deploy
```


