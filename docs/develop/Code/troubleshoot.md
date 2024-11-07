---
sidebarPosition: 40
---

# Troubleshoot

_Hints for dealing with the issues arrising in the current coding environment._ 

## Gems

* Puma 6.4 fails to install (SSL related errors)
 * Ensure Ruby is installed with reference to openssl@3 (see below)

## Ruby

* RVM fails to install version on Mac (M1) with an openssl related error 
 * `rvm install ruby-3.2.2 --reconfigure --with-openssl-dir=$(brew --prefix openssl@3)1`

## Postgis (Mac)

If you install from Postgres app (recommended) then you can configure your pg gem with:

TODO

## PostgreSQL settings to speed up testing

These setttings makes running the specs suite faster. They basically trade database integrity in case of failures for speed. **This shouldn't be done for production databases.**

Edit your `postgresql.conf` file, in Ubuntu it can be found here at `/etc/postgresql/{your installed version here}/main/postgresql.conf`.

Locate the following settings and change their values to match the ones here
```
fsync = off                             # turns forced synchronization on or off
synchronous_commit = off                # synchronization level; on, off, or local
full_page_writes = off                  # recover from partial page writes
```

That's it. Tests should go faster.

## On OS X system updates
* review your Ruby configuration
* agree to the new XCode terms of service

## On Ruby version bumps
* check that you're running the required Ruby `which ruby`
* reinstall Ruby as per instructions
* reinstall your ruby gems

## When you switch between docker and native environments
* nuke node modules `rm -rf node_modules`
* redo `npm install`

Tip: If you're using the Docker development environment you'll want to replace calls to `rails` below with `bin/rails`.

