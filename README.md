# CommonJS Karma SauceLabs Example

[![Build Status](https://travis-ci.org/bripkens/commonjs-karma-saucelabs-example.svg?branch=master)](https://travis-ci.org/bripkens/commonjs-karma-saucelabs-example)

This repository (will) contain a minimal working example of CommonJS modules
that are transpiled for use in the browser and tested using Karma and
SauceLabs.


## Usage

Clone this repository

```
git clone git@github.com:bripkens/commonjs-karma-saucelabs-example.git
```

Install dependencies

```
cd commonjs-karma-saucelabs-example
npm install
```

Execute the tests
```
npm test
```

## Configure Travis CI

```
$ travis encrypt --add env.global SAUCE_USERNAME=...
$ travis encrypt --add env.global SAUCE_ACCESS_KEY=...
```


## TODO
 - configure local SauceLabs usage
 - test badge
 - where to register with saucelabs, how to find the access key
   see lower left hand corner on https://saucelabs.com/account
 - use one account per OSS project.
   Create one via https://saucelabs.com/opensauce
> We currently do not allow transitioning existing accounts to our open source program. Please consider creating a new account (preferably one per OSS project) or contact help@saucelabs.com for assistance. Please note: You'll need to logout to sign up for a new account.
