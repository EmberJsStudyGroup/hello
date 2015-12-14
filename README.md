[![Join the chat at https://gitter.im/EmberJsStudyGroup/hello](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/EmberJsStudyGroup/hello?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

** Temporary - hello world.**

Install nodejs, npm and ember-cli: http://guides.emberjs.com/v2.2.0/getting-started/

----

# Starting from scratch

## Generate

<pre>
ember new hello
cd hello
ember server
# access from the browser: http://localhost:4200
</pre>

## Heroku - Ember JS deployment

#### Initial setup

Create a (free) Heroku account and install the Heroku toolbelt: https://toolbelt.heroku.com/

Link your new repo to Heroku:

<pre>
# outside your repo, run:

heroku create --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git
# Creating random-appname-4145... done, stack is cedar-14
# Buildpack set. Next release on random-appname-4145 will use https://github.com/tonycoco/heroku-buildpack-ember-cli.git.
# https://random-appname-4145.herokuapp.com/ | https://git.heroku.com/random-appname-4145.git

heroku apps:rename emberjs-hello --app random-appname-4145
# Renaming random-appname-4145 to emberjs-hello... done
# https://emberjs-hello.herokuapp.com/ | https://git.heroku.com/emberjs-hello.git
# Don't forget to update your Git remotes on any local checkouts.

# in your git repo / ember app root, run:
git:remote -a emberjs-hello
# Installing Heroku Toolbelt v4... done
# heroku-cli: Adding dependencies... done
# heroku-cli: Installing core plugins... done
# set git remote heroku to https://git.heroku.com/emberjs-hello.git

# then deploy by pushing to heroku master:
git push heroku master

</pre>

## Push to (re-)deploy

Run `git push heroku master` to (re-)deploy your app using the latest commit.
Access https://emberjs-hello.herokuapp.com

Source: http://www.programwitherik.com/deploy-your-ember-application-to-heroku/

----

# Starting from an existing repo


## Setup ember project

<pre>
git clone https://github.com/EmberJsStudyGroup/hello.git
cd hello
npm install
bower install
</pre>

## Link with Heroku

Create a (free) Heroku account and install the Heroku toolbelt: https://toolbelt.heroku.com/

Link your new repo to Heroku:

<pre>
# outside your repo, run:

heroku create --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git
# Creating random-appname-4145... done, stack is cedar-14
# Buildpack set. Next release on random-appname-4145 will use https://github.com/tonycoco/heroku-buildpack-ember-cli.git.
# https://random-appname-4145.herokuapp.com/ | https://git.heroku.com/random-appname-4145.git

# cd to your repo, then run:
heroku git:remote -a emberjs-hello
</pre>


## Adding contributors to a Heroku app

<pre>
# from your project repository, run:
heroku sharing:add user@email.com
</pre>


Sources:
https://devcenter.heroku.com/articles/sharing
http://stackoverflow.com/questions/5129598/how-to-link-a-folder-with-an-existing-heroku-app


----

On each push to heroku, you'll see:

<pre>
# Counting objects: 302, done.
# Delta compression using up to 8 threads.
# Compressing objects: 100% (282/282), done.
# Writing objects: 100% (302/302), 3.76 MiB | 426.00 KiB/s, done.
# Total 302 (delta 31), reused 4 (delta 0)
# remote: Compressing source files... done.
# remote: Building source:
# remote:
# remote: -----> Fetching set buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git... done
# remote: -----> Ember CLI app detected
# remote: -----> Exporting config vars to environment
# remote: -----> Building environment: production
# remote:
# remote:        PRO TIP: Avoid using semver ranges starting with '>' in engines.node
# remote:        See https://devcenter.heroku.com/articles/nodejs-support
# remote:
# remote: -----> Requested node range:  >= 0.10.0
# remote: -----> Resolved node version: 5.0.0
# remote: -----> Downloading and installing node
# remote: -----> Using default npm version: 3.3.6
# remote: -----> Downloading and installing nginx
# remote: -----> Adding boot script
# remote: -----> Copying configs
# remote: -----> Creating node_modules cache directory
# remote: -----> Found existing bower_components directory; skipping cache
# remote: -----> Installing bower which is required by other dependencies
# remote:        project@0.0.0 /tmp/build_1ebe2b0071019cbf6ed7309ed1a57203
# remote:        └─┬ bower@1.5.3
# remote:          ├── abbrev@1.0.7
# remote:          ├── archy@1.0.0
# remote:          ├─┬ bower-config@0.6.1
# remote:          │ ├── graceful-fs@2.0.3
# remote:          │ ├── mout@0.9.1
#
# ....................
#
# remote:        │       ├── camelcase@1.2.1
# remote:        │       ├── decamelize@1.1.1
# remote:        │       ├── window-size@0.1.0
# remote:        │       └── wordwrap@0.0.2
# remote:        ├── ember-data@1.13.15
# remote:        ├── ember-disable-proxy-controllers@1.0.1
# remote:        └── ember-export-application-global@1.0.5
# remote:
# remote: -----> Cleaning up node-gyp and npm artifacts
# remote: -----> Building Ember CLI application production distribution
# remote:        version: 1.13.13
# remote:        Could not find watchman, falling back to NodeWatcher for file system events.
# remote:        Visit http://www.ember-cli.com/user-guide/#watchman for more info.
# remote:        BuildingBuilding.Building..Building...Built project successfully. Stored in "dist/".
# remote:
# remote: -----> Discovering process types
# remote:        Procfile declares types     -> (none)
# remote:        Default types for buildpack -> web
# remote:
# remote: -----> Compressing... done, 17.9MB
# remote: -----> Launching... done, v3
# remote:        https://emberjs-hello.herokuapp.com/ deployed to Heroku
# remote:
# remote: Verifying deploy.... done.
# To https://git.heroku.com/emberjs-hello.git
#  * [new branch]      master -> master
</pre>
