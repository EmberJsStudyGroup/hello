Temporary - hello world.

## Generate

Install nodejs, npm and ember-cli: http://guides.emberjs.com/v2.2.0/getting-started/

```bash
ember new hello
cd hello
ember server
# access from the browser: http://localhost:4200
```

## Push to heroku

Create a (free) Heroku account.
Install the Heroku toolbelt: https://toolbelt.heroku.com/


#### Initial setup

```bash
# in your git repo & ember app repo, run once:
heroku create
heroku apps:rename emberjs-hello
```

Then `git push heroku master` to (re-)deploy your app using the latest commit.
Access http://emberjs-hello.herokuapp.com
