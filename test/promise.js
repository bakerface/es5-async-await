/**
 * Copyright (c) 2016 Christopher M. Baker
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

var es5 = require('..');
var Promise = require('when').Promise;

require('should');

function getUserById(id) {
  if (id) {
    return Promise.resolve({
      id: id,
      username: 'bakerface'
    });
  }

  return Promise.reject(new Error());
}

var getUsernameById = es5.async(function(id) {
  var user = es5.await(getUserById(id));
  return user.username;
});

var getUsernameByIdSafe = es5.async(function(id) {
  try {
    var user = es5.await(getUserById(id));
    return user.username;
  }
  catch (e) {
    return 'unknown';
  }
});

describe('promise', function() {
  it('should resolve when the promise resolves', function(done) {
    getUsernameById(1234).then(function(username) {
      username.should.eql('bakerface');
      done();
    });
  });

  it('should reject when the promise rejects', function(done) {
    getUsernameById().catch(function() {
      done();
    });
  });

  it('should support try-catch blocks', function(done) {
    getUsernameByIdSafe().then(function(username) {
      username.should.eql('unknown');
      done();
    });
  });
});
