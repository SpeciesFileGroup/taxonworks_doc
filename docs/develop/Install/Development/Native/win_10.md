---
sidebarPosition: 5 
---

# Windows 10 with WSL2

## Introduction

Windows 10 now has Linux available internally via WSL2 (Windows Subsystem for
Linux v2). WSL2 runs a real Linux kernel and is much faster than the first
iteration, WSL1, however it is still noticeably slower than Linux installed on
a 'bare metal'.

Taxonworks can be developed using WSL2 "natively". This document describes
how to set everything up starting with enabling WSL2 on Windows 10.

You will NOT need Docker Desktop for this installation.

## Preparation

Note: The installation procedure changes with time while WSL2 matures. This
section describes installation procedure for Windows 10 October 2020 edition.

* Run all Windows updates to make sure you are at the latest Windows 10 version.

* Install `Windows Terminal` (optional)

    Windows Terminal is an Open Source project from Microsoft that provides a
    pretty nice terminal emulator. I would say the quality of it is approaching
    the quality of popular terminal emulators on Mac and Linux. It is highly
    configurabele and allows to run PowerShell, CMD, and Linux.

    To install it, open `Windows Store` app and search for `Windows Terminal`.

    To make Linux experience more convenient (for example starting from Linux
    home directory on Ubuntu, or using ligatures after installing [Fira
    Code](https://github.com/tonsky/FiraCode)) you can modify `Windows
    Terminal` configuration (it is just a JSON text) similar to this
    [example](../docker-win/win-term.json).

* Install `Visual Studio Code` (optional)

  WSL2 does not have native support for graphical programs yet (it is
  planned).  However Visual Studio Code, a popular code editor, supports a
  transparent "bridge" to WSL Linux. You can download it at
  `https://code.visualstudio.com/download`

  `VS Code` has several useful plugins that I would recommend to install:

  * Ruby: for Ruby language support.
  * Ruby Solargraph: for adding "code intelligence" via Language Server
    for Ruby -- Solargraph gem.
  * WSL: for (almost) transparent work with WSL2 directories.
  * Containers: for working with code transparently (almost) via
    WSL and/or SSH
  * Docker: simplifies interacting with docker containers (needed only
     if Docker Desktop is also installed)

  Some of these plugins are installed on windows side, some on the WSL2
  side. Usually hints from `VS Code` allow to make correct decision where to
  install what.

## Install WSL2

Open PowerShell as administrator (standalone or as Windows Terminal) and type
the following commands:

* Enable WSL2

    ```.bash
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    ```

* Enable Virtual Machine Platform

    ```.bash
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    ```

    Restart your computer.

* Setup WSL v2 as default

    ```.bash
    wsl --set-default-version 2
    ```

### WSL troubleshooting

If something does not work, first open PowerShell and make sure you are running WSL v2, and now WSL v1

```PowerShell
wsl -l -v

wsl -l -v
  NAME                   STATE           VERSION
* Ubuntu-20.04           Running         2
  docker-desktop         Running         2
  docker-desktop-data    Running         2
```

Here the command shows that Ubuntu-20.04 is running correctly, is the default distribution (has *), and runs WSL version 2.

If you do have WSL2 installed, you will get report for every linux
distribution you have if it is running correctly and what WSL version it has.
If you have only WSL1 installed you will get an error message.

Removing Linux distribution can be either done usual way via uninstall GUI
that Windows provides (Ubuntu distro should appear there like a 'normal'
app), or It can be done using PowerShell with `wslconfig` command

```PowerShell
wslconfig /l
Windows Subsystem for Linux Distributions:
Ubuntu-20.04 (Default)
docker-desktop
docker-desktop-data
```

To change WSL from v1 to v2 for a distribution (for example for Ubuntu-20.04)
using PowerShell

```PowerShell
wsl --set-version Ubuntu-20.04 2
```

To remove Ubuntu-20.04 the command would be:

```PowerShell
wslconfig /u Ubuntu-20.04
```

## Install Linux Distro

There are several Linux distros available for WSL2, in our example we
use Ubuntu 20.04.

Go to `Microsoft Store` app, search for Ubuntu, install and launch it. You will
see it appearing in a separate terminal this time. You can customize it right
in the terminal, or you can close it, and reopen it in `Windows Terminal`,
where it will appear now as an option.

Once Ubuntu 20.04 is installed, open it in the Windows Terminal, run:

```bash
sudo apt update
sudo apt dist-upgrade
```

## Install Postgresql database

Open Ubuntu bash in Windows Terminal

Add PostgreSQL source repository for apt-get.

```bash
echo "deb [arch=amd64] http://apt.postgresql.org/pub/repos/apt/ focal-pgdg main" | sudo tee -a /etc/apt/sources.list.d/pgdg.list
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
```

Install required packages.

```bash
sudo apt-get install -y postgresql-15 postgresql-contrib-15 libgeos-dev libproj-dev postgresql-15-postgis-3 postgresql-15-postgis-3-scripts libpq-dev cmake imagemagick libmagickwand-dev tesseract-ocr git meld curl libssl-dev
```

check postgresql version:

```bash
psql --version
```

When prompted supply the same password you will add later to
`config/database.yml`.

```bash
sudo service postgresql start
sudo -u postgres createuser -s -d -P taxonworks_development
```

Change permissions for posgresql, you are changing 'peer' to 'trust' for the
matched line.

```bash
sudo sed -i.bak 's/local\s*all\s*all\s*peer/local all all trust/'  /etc/postgresql/15/main/pg_hba.conf
sudo service postgresql restart
```

Now you should be able to start postgres, stop, ask for a status:

```bash
sudo service postgresql status
sudo service postgresql start
sudo service postgresql restart
sudo service postgresql stop
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

Install virtual Ruby environment. You can follow [Ubuntu 20.04
instructions](ubuntu_20_04.md) for for installing `rvm`. Here I use an
alternative `rbenv` package, which is more lightweight.

## Install rbenv

Rbenv, like rvm, allows to run several versions of ruby at the same time.

```bash
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
git clone https://github.com/rkh/rbenv-update.git ~/.rbenv/plugins/rbenv-update
```

to `~/.bashrc` add:

```bash
export PATH=$HOME/.rbenv/bin:$PATH
eval "$(rbenv init -)"
```

Restart terminal. Now you should be able to install current Ruby and set it as
default.

```bash
rbenv install 2.7.2
rbenv global 2.7.2
gem install bundler
```

Other useful commands

```bash
rbenv help
rbenv install --list
rbenv versions
rbenv upgrade
```

## Install taxonworks

```bash
mkdir Projects
cd Projects
git clone https://github.com/SpeciesFileGroup/taxonworks.git
cd taxonworks
```

When you do `cd taxonworks` you will see a message regarding a particular
version of Ruby. If it is not yet installed, install that version of Ruby
with the command provided in the terminal. It will look something like:
`rbenv install 2.7.2`.

```bash
gem install bundler

bundle
npm install

cp config/database.yml.example config/database.yml
cp config/secrets.yml.example config/secrets.yml

bundle exec rake db:create && bundle exec bin/rails db:environment:set RAILS_ENV=development

bundle exec rake db:schema:load && bundle exec rake db:test:prepare
```

Run the test suite, you may see some failures, but the vast majority should
pass.

```bash
bundle exec rake
```

If you get to this point and tests are running, you can continue with
[Ubuntu 20.04](ubuntu_20_04.md) documentation.

To work with taxonworks code using VS Code, enter Linux terminal, go to
taxonworks development directory and run:

```bash
code .
```

This command will open VS Code on Windows side, connected to Linux via WSL
'bridge'.
