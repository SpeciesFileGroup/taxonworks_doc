---
sidebarPosition: 2 
---


# Arch Linux

_These instructions were created with the 2020-12-01 Arch version and will likely be out of sync with the latest rolling release of Arch, so this is intended to be a rough guide on how to install TaxonWorks. Additional steps and troubleshooting will likely be required._

## Overview
1. Assumes a clean install of the OS.
2. Copy and paste each line, this is not intended to run as a shell script.
3. Carefully read the instructions before each line before exectuting the line.

## System Requirements (Recommended)
1. Memory: 8 GB RAM
2. Storage: 32 GB (when testing with Sandbox data)

## Installation Instructions

Open a terminal and update .
```
sudo pacman -Syu
```

Reboot the machine
```
sudo reboot
```  

Reopen a terminal.

Install required packages.
```
sudo pacman -S postgresql postgis imagemagick tesseract git meld curl cmake nodejs npm pkgconf base-devel tar gzip diffutils python-psycopg2 graphviz
```

For Tesseract OCR, you also need to install your desired [language data packages](https://www.archlinux.org/packages/?sort=&q=tesseract-data-&maintainer=&flagged=). For example:
```
sudo pacman -S tesseract-data-eng
```

Enable the postgresql service.
```
sudo systemctl enable postgresql.service
```

Initialize the postgresql database.
```
sudo -u postgres initdb -D /var/lib/postgres/data
```

Start the postgresql service.
```
sudo systemctl start postgresql.service
```

When prompted do not supply a password. See below, the password must match `config/database.yml` if provided.
```
sudo -u postgres createuser -s -d -P taxonworks_development
```

Change permissions for posgresql, you are changing 'peer' to 'trust' for the matched line.
```
sudo sed -i.bak 's/local\s*all\s*all\s*peer/local all all trust/'  /var/lib/postgres/data/pg_hba.conf
sudo systemctl restart postgresql
```

Install RVM
```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

curl -sSL https://get.rvm.io | bash -s stable --ruby
```

To use RVM, you need to run the shell in login mode, which for bash you can do with:

```
bash --login
```

If you are using zsh instead of bash as your shell, you can do:

```
zsh --login
```

You may optionally want to Google how to configure your terminal client to use login mode, so that you do not have to manually enter login mode.


Setup TaxonWorks project repository:

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
bundle exec rake
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

### May 2025: bundle fails to install ruby-prof 1.7.1 with error: unknown type name ‘bool’

Configure bundler to use --with-cflags:

```
bundle config build.ruby-prof --with-cflags="-DHAVE_STDBOOL_H" && bundle
```

Or set ruby-prof version 1.7.2 in the Gemfile and run `bundle`.

### Selenium tests

In order for selenium tests to work, it may be necessary to add the following config to the `taxonworks/config/application_settings.yml` file:

```yml
test:
  selenium:
    headless: false
    browser: 'firefox'
    firefox_binary_path: '/usr/bin/firefox'
```


### ImageMagick and RMagick

If you get the following message:

```
Gem Load Error is: This installation of RMagick was configured with ImageMagick 7.0.10 but ImageMagick 7.0.11-1 is in use.
```

Reinstall rmagick:

```
bundle pristine rmagick
```

### Database doesn't exist

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

### Database collation version mismatch

If you are getting a database collation mismatch when restoring a database dump:

```
The database was created using collation version 2.36, but the operating system provides version 2.37.
```

It may be necessary to [re-initalize postgresql with a locale that doesn't depend on collations compiled with glibc](https://wiki.archlinux.org/title/PostgreSQL) with:

```
sudo -u postgres initdb --locale=C.UTF-8 --encoding=UTF8 -D /var/lib/postgres/data
```
