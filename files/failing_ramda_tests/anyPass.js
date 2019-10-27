var R = require('rambda');
var eq = require('./shared/eq');

describe('anyPass', function() {
  var odd = function(n) { return n % 2 !== 0; };
  var gt20 = function(n) { return n > 20; };
  var lt5 = function(n) { return n < 5; };
  var plusEq = function(w, x, y, z) { return w + x === y + z; };
  it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
    eq(R.anyPass([odd, lt5, plusEq]).length, 4);
    eq(R.anyPass([odd, lt5, plusEq])(6, 7, 8, 9), false);
    eq(R.anyPass([odd, lt5, plusEq])(6)(7)(8)(9), false);
  });
});