# CommonJS Karma SauceLabs Example

[![Build Status](https://travis-ci.org/bripkens/commonjs-karma-saucelabs-example.svg?branch=master)](https://travis-ci.org/bripkens/commonjs-karma-saucelabs-example)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/bripkensdev.svg)](https://saucelabs.com/u/bripkensdev)

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
