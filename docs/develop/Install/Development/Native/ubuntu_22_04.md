---
sidebarPosition: 4 
---

# Ubuntu 22.04

## Overview
1. Assumes a clean install of the OS.
2. Copy and paste each line, this is not intended to run as a shell script.
3. Carefully read the instructions before each line before exectuting the line.

## System Requirements (Recommended)
1. Memory: 8 GB RAM
2. Storage: 32 GB (when testing with Sandbox data)

## Installation Instructions

Open a terminal.
```
sudo apt update && sudo apt dist-upgrade
```

Reboot the machine
```
sudo reboot
```  

Reopen a terminal.

Add PostgreSQL source repository for apt-get.
```
echo "deb [arch=amd64] http://apt.postgresql.org/pub/repos/apt jammy-pgdg main" | sudo tee -a /etc/apt/sources.list.d/pgdg.list
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
```

Install required packages.
```
sudo apt-get install -y postgresql-15 postgresql-contrib-15 libgeos-dev libproj-dev postgresql-15-postgis-3 postgresql-15-postgis-3-scripts libpq-dev cmake imagemagick libmagickwand-dev tesseract-ocr git meld curl gnupg ca-certificates
```

When prompted do not supply a password. See below, the password must match `config/database.yml` if provided.
```
sudo -u postgres createuser -s -d -P taxonworks_development
```

Change permissions for posgresql, you are changing 'peer' to 'trust' for the matched line.
```
sudo sed -i.bak 's/local\s*all\s*all\s*peer/local all all trust/'  /etc/postgresql/15/main/pg_hba.conf
sudo service postgresql restart
```

Import Nodesource GPG key
```
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
```

Configure apt-get to point to newer Node packages
```
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

Install Node
```
sudo apt-get update
sudo apt-get install nodejs -y
```

Install RVM
```
gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

\curl -sSL https://get.rvm.io | bash -s stable
```

Configure your terminal to use RVM, in the menu bar of the terminal go to
`Menu -> Preferences`. Under `Profiles` select your default profile (clean installation should list it as `Unnamed`). Then go to `Command` tab and check `Run command as login shell`.

Close the current terminal open a new one.

```
mkdir Projects
cd Projects
git clone https://github.com/SpeciesFileGroup/taxonworks.git
cd taxonworks
```

When you do `cd taxonworks` you will see a message regarding a particular version of Ruby.  Install that version of Ruby with the command provided in the terminal. It will look something like: `rvm install 3.1.2`.

```
cd . # Refreshes rvm to pick up recently installed ruby above
gem install bundler

bundle
npm install

cp config/database.yml.example config/database.yml
cp config/secrets.yml.example config/secrets.yml

bundle exec rake db:create && bundle exec bin/rails db:environment:set RAILS_ENV=development

bundle exec rake db:schema:load && bundle exec rake db:test:prepare
```

Run the test suite, you may see some failures, but the vast majority should pass.
```
# TMPDIR is a workaround to Firefox not being able to access /tmp due to being sandboxed by Snap
TMPDIR=$(pwd)/tmp bundle exec rake
```

If you receive any migration related errors when you run test suite, use the following command before proceeding ahead:
```
bundle exec rake db:migrate
```
Now proceed ahead to deploy the development server.

## Deploy the development server

Before starting rails server it is recommended -but not strictly required- to start the Webpack development server first on a separate terminal so assets are rebuilt faster when developing:
```
./bin/shakapacker-dev-server
```
Alternatively you may run `bundle exec rails assets:precompile` (but any change you make will take longer to materialize when browsing).

Start the web server with the following command: *(If you followed the recommendation above then wait for assets compilation to finish before proceeding)*
```
bundle exec rails s
```
Navigate in your browser to 127.0.0.1:3000.  To stop the development server return to the terminal window and type `ctrl-c`.

## Optional

If you want to populate the development server with some dummy accounts do this:
```
bundle exec rake db:seed
```
The username for the dummy account is `user@example.com` and password is `taxonworks`. Note, this account is a regular user and does not have admin privileges. For admin privileges use `admin@example.com` (same password).

## Required for development 

If you plan on coding and committing back code you'll have had to configure git, at minimum do this
```
git config --global user.name "Jane Doe"
git config --global user.email developer@example.com
git config --global merge.tool meld
```

## See also 

* [tuning_postgres_for_development.md][1]

[1]: https://github.com/SpeciesFileGroup/install_taxonworks/blob/master/development/native/tuning_postgres_for_development.md

## Troubleshooting

If you are getting the following message running `bundle exec rake db:create`:

```
PG::ConnectionBad: FATAL: database "taxonworks_development" does not exist error.
```

You will have to create the database using postgresql console:

```
sudo -u postgres psql
create database taxonworks_development;
grant all privileges on database taxonworks_development to taxonworks_development;
```
