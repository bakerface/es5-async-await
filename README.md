# es5-async-await
[![npm package](https://badge.fury.io/js/es5-async-await.svg)](http://badge.fury.io/js/es5-async-await)
[![build](https://travis-ci.org/bakerface/es5-async-await.svg?branch=master)](https://travis-ci.org/bakerface/es5-async-await)
[![code climate](https://codeclimate.com/github/bakerface/es5-async-await/badges/gpa.svg)](https://codeclimate.com/github/bakerface/es5-async-await)
[![coverage](https://codeclimate.com/github/bakerface/es5-async-await/badges/coverage.svg)](https://codeclimate.com/github/bakerface/es5-async-await/coverage)
[![issues](https://img.shields.io/github/issues/bakerface/es5-async-await.svg)](https://github.com/bakerface/es5-async-await/issues)
[![dependencies](https://david-dm.org/bakerface/es5-async-await.svg)](https://david-dm.org/bakerface/es5-async-await)
[![devDependencies](https://david-dm.org/bakerface/es5-async-await/dev-status.svg)](https://david-dm.org/bakerface/es5-async-await#info=devDependencies)
[![downloads](http://img.shields.io/npm/dm/es5-async-await.svg)](https://www.npmjs.com/package/es5-async-await)

#### Table of Contents
[#](#) **async**(*fn*) - create an async function.
<br>
[#](#) **await**(*promise*) - wait for an async function to resolve.

``` javascript
var async = require('es5-async-await/async');
var await = require('es5-async-await/await');

function sleep(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

function getMessageById(id) {
  if (id) return Promise.resolve('and you can await values');
  return Promise.reject('using try/catch for errors');
}

var example = async(function(ms) {
  console.log('you can pass async function arguments');
  await(sleep(ms));

  var message = await(getMessageById(1234));
  console.log(message);

  try {
    await(getMessageById());
  }
  catch (e) {
    console.log(e);
  }

  return 'and promises are returned';
});

example(1000)
  .then(console.log)
  .catch(console.error);
```
