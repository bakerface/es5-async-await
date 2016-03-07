var Promise = require('when').Promise;

require('fibers/future');

module.exports = function(fn) {
  return function() {
    var _this = this;
    var _args = [].slice.call(arguments, 0);

    return new Promise(function(resolve, reject) {
      fn.future().apply(_this, _args).resolve(function(err, value) {
        if (err) {
          reject(err);
        }
        else {
          resolve(value);
        }
      });
    });
  };
};
