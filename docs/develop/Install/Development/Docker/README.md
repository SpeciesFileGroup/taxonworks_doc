---
sidebarParentPosition: 3
sidebarPosition: 3
---

# Docker

## Quick start

You can quickly start developing or testing against the API with minimal configuration. The following assumes you have [Docker](https://www.docker.com/get-docker) and its dependencies installed and running. If using Docker Desktop for MacOS/Windows we **strongly** suggest to increase memory to *at least* 4GB under "Resources" section in settings (you may not want to assign more than half of your system RAM).

> Instructions below refer to running `docker compose`, but if you're running an older version of docker you may need to use `docker-compose` instead.

* If using MacOS/OSX Install XCode tools
* `git clone https://github.com/SpeciesFileGroup/taxonworks.git` - to clone repository in directory of your choice
* `cd taxonworks`
* `docker compose build --pull`
* `docker compose up`
*  browse to `127.0.0.1:3000` if you can see something similar to below in your terminal window:
    ```
    webpack_1  | webpack: Compiled successfully.
    ```
* You should see the logon window.
* Wait for a while if the logon window does not load not load quickly.
* Use `ctrl-c` or `docker compose down` in another local terminal to shutdown

### Next steps

* Minimally, you now need to [Create a user from the console](https://github.com/SpeciesFileGroup/taxonworks_doc/blob/archive/development/HOW-TO.md#create-a-user-from-the-console) or [Seed a project, users, and some data from the command line](https://github.com/SpeciesFileGroup/taxonworks_doc/blob/archive/development/HOW-TO.md#seed-a-project-users-and-some-data-from-the-command-line) or _Restore a database dump_ (see below)

* To run tests first setup the test database with `docker compose exec app bundle exec rails db:test:prepare` and then run `docker compose exec app bundle exec rake`.
## Develop!

### Overview

* Commands in following sections assume you are running `docker compose up` in another terminal.
* To make changes simply edit the TaxonWorks source that you cloned into your local directory
* Changes are automatically applied and visible in the browser as they would be for the native environment.
* In most cases you need not restart the server or redo `docker compose up` to see your changes, though there are some cases in which you will.

### More on Docker

* In TaxonWorks `docker compose` is configured to use  [Dockerfile.development](https://raw.githubusercontent.com/SpeciesFileGroup/taxonworks/development/Dockerfile.development)
* The container is mapped to the source on your local machine, what you see when you shell into the app is what is on your local file system.
* See [documentation for Docker](https://docs.docker.com/).

### Debugging Ruby code using byebug

First run docker compose in daemon mode:
* `docker compose up -d` (If you are already running `docker compose up` stop it first with `docker compose down`)

then attach to the app:
* `docker attach taxonworks-app-1` (Container name can be found with `docker ps`, but if app is running on taxonworks directory `taxonworks-app-1` is likely correct)

The scrolling server log and any debugger entry point will appear in the console window as TaxonWorks runs.

Note that the server log scrolling by (and the log files in the `log` folder) includes database calls being made in response to your browser actions, which can also be helpful for debugging.

If you've never used byebug before, see [the documentation](https://www.rubydoc.info/gems/byebug/11.1.3), or briefly: insert a line `byebug` in your ruby code where you'd like to have a breakpoint, do something that causes that section of code to execute, and then you should see the byebug prompt in your terminal waiting for you to debug your code. For viewing data structures you may want to drop into pry (just type `pry`), which will nicely format and colorize its output: just enter the name of some variable. You'll need to `quit` out of pry to return to byebug to step, continue, etc.

### Debugging Vue code using your browser

The UI of many tasks is written using the Vue javascript framework. To debug Vue code, you can work directly in your browser's developer tools to set breakpoints and examine variables. There's also a Vue browser devtools extension available [here](https://devtools.vuejs.org/). It allows you to do things like click in the UI to find the component that defines that part of the interface, and to view the refs, props, and store associated with that component.

### Stop a container

Get the container id from `docker ps`

* `docker stop 3dc4293eg17e`

or to stop all running containers

* `docker stop $(docker ps -q)`

## Database

The database persists across use (e.g. docker builds, up/down). By default it is *not* the same as database described in the "native" environment approach.

_TODO: move below to unified HOW TO in taxonworks_doc__

### Drop and recreate the database to an empty state

* Ensure the app is not running (you may stop it with `docker compose stop app`), the database container needs to be running.
* `docker compose exec db psql -U postgres`
* `drop database taxonworks_development;`
* `create database taxonworks_development;`
* `\q`
* You may restart taxonworks now with `docker compose start app`

### Restore a database dump

Assumes you have a prior export generated by `rake tw:db:dump`

* Drop and recreate the database to an empty state, but *do not* restart the app yet
* `docker compose exec -T db pg_restore -U postgres -d taxonworks_development < /path/to/pg_dump.dump`
* Depending on when the database was dumped restore errors about roles can be ignored, i.e. the process will "fail" but be successful.
* You may restart taxonworks now with `docker compose start app`

## Troubleshooting

### docker & docker compose show permission errors (Linux users)
To fix this you may follow [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/), or use `sudo` on `docker` and `docker compose` commands.

### "docker compose build" fails

### "docker compose up" fails

#### Migration related error
* Problem: Active Migration related error is observed in client browser after following installation process.
* Solution: The problem is patched in latest version, if you're still observing it after updating local TaxonWorks repository,  re-open this [issue](https://github.com/SpeciesFileGroup/taxonworks/issues/250) with your problem.

#### With PG::ConnectionBad: could not connect to server
* Problem: Likely you have `config/database.yml` already set up for your native local server or some other location that is not available
* Solution: You can remove `config/database.yml` and let the startup process reconstruct it or make sure config for development environment is the same as `config/database.yml.docker.compose.example`

#### FATAL: database files are incompatible with server
* This may happen if you had used to have a running docker compose environment with a taxonworks prior to 0.22.3. To fix this problem you'll need to execute `docker compose down` (**DO NOT** add `--volumes` param). Then you can restart the environment as usual. You'll notice that data will be migrated from legacy Postgres 10 to 12.

#### With "A server is already running"
* If an app container is not shut down correctly (`docker compose down`) it can leave the file `tmp/server.pid`
* On the _local_ file system check to see if `/app/tmp/pids/server.pid` exists, if it does, delete it.

#### With `(Bundler::GemNotFound)` or Log reports `Gem not found`
* Bring down the containers `docker compose down`
* Redo the build step `docker compose build`

### Windows related

* You may need to use `localhost` rather than `0.0.0.0` where applicable in database calls.

### Some pages load fine, others may only load partially or not at all

* On completion of `docker compose up` you may see `* Listening on http://0.0.0.0:3000` and your shell may even make that url a clickable link, but do not use it, you want `127.0.0.1:3000` or `localhost:3000` instead.

### Cleanup old containers

*  Try `docker images` and `docker rmi <id>` to cleanup old images.

### `404 Not Found` error at `127.0.0.1:3000`

* This can happen after `docker compose build`; clear your browser cookies for that page and try again.


