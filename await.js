var Future = require('fibers/future');

module.exports = function(promise) {
  var future = new Future();

  promise
    .then(function(value) {
      future.return(value);
    })
    .catch(function(error) {
      future.throw(error);
    });

  return future.wait();
};
