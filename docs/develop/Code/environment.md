---
sidebarPosition: 2
---

# Development Environment

_Common actions taken to maintain a development environment._ 

## Getting started
* [Install](/develop/Install/Development/Native/) TaxonWorks locally
* Setup your code editor (IDE)
* ...
* Code!

## IDE 
The core team writes code in VSCode and/or a flavour of vim, we've used RubyMine in the past as well.

## Day-to-day maintenance
_A list of commonly executed development patterns._

The codebase changes relatively rapidly.  There are some general patterns that you can follow to ensure syncing and keeping your development environment up to date does not give you a headache.

### Pull, bundle, install, migrate

_assumes you're in the TaxonWorks path_

* `git pull` get the latest code
* run a test or two to see that your environment is not borked `spring rspec spec/models/otu_spec.rb`

You might also:

* `bundle install` to update TaxonWorks' Ruby Gem dependencies
* `npm install` to update TaxonWorks' Javascript dependencies
* `rake db:migrate` to update TaxonWorks database schema 

### Enter the app shell

* Open a terminal
```
cd /path/to/taxonworks/
```
If using [Docker environment](https://github.com/SpeciesFileGroup/install_taxonworks/blob/master/development/docker/README.md) then continue with:
```
docker compose exec app bash
```
That puts you in a bash shell inside the linux Docker image.

### Enter the Rails console
* Enter the app shell (see above), or simply in native environment
```
rails c
exit
```
From here you can play around with Rails models and query the state of the application. See below for an example of creating a new user by running `create!` on the `User` model.

::: tip
Take care when performing database operations from the console, you have direct access to your app's data there. If you're just interested in playing around or trying something out to see how it will work, you can use `rails console --sandbox` instead - any changes you make from sandbox mode will be rolled back when you exit.
:::

### Create a TaxonWorks user from the console
A fresh install of TaxonWorks doesn't include any users. This section covers creating a single user, or read on below for creating a project, users, and some seed data all at once.
* Enter the Rails console (see above)
```
User.create!(name: 'you', password: 'password', password_confirmation: 'password', self_created: true, is_administrator: true, email: 'user@example.com')
quit
```

### Seed a project, users, and some data from the command line
* Enter the app shell (see above)
```
bundle exec rails db:seed
```
Alternatively if you're using Docker you can execute the command above straight from the TaxonWorks directory using `docker compose`:
```
docker compose exec app bundle exec rails db:seed
```
This creates an admin and a non-admin user, which are admin@example.com and user@example.com respectively, both with password `taxonworks`.

### Run asynchronous code / active jobs / delayed jobs
Running `rails s` is not enough to make queued jobs run since the way it is setup they don't run in-process. Certain downloads, for example, exist as queued jobs and won't be available until those jobs are run.

To make them run open up a new app shell and run `rails jobs:work`; this will run any existing jobs and then sit and watch for new jobs to run as they come in. You may notice that the CPU usage may constantly be reaching 100% for short bursts (and also speed up your CPU fan). If this is an inconvenience to you, or you wish to control when it is a good time to start working off jobs you may instead use `rails jobs:workoff`. This command will run all existing pending jobs and then exit.


