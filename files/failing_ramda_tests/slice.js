var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('slice', function() {
  it('handles array-like object', function() {
    var args = (function() { return arguments; }(1, 2, 3, 4, 5));
    eq(R.slice(1, 4, args), [2, 3, 4]);
  });
  it('can operate on strings', function() {
    eq(R.slice(0, 0, 'abc'), '');
    eq(R.slice(0, 1, 'abc'), 'a');
    eq(R.slice(0, 2, 'abc'), 'ab');
    eq(R.slice(0, 3, 'abc'), 'abc');
    eq(R.slice(0, 4, 'abc'), 'abc');
    eq(R.slice(1, 0, 'abc'), '');
    eq(R.slice(1, 1, 'abc'), '');
    eq(R.slice(1, 2, 'abc'), 'b');
    eq(R.slice(1, 3, 'abc'), 'bc');
    eq(R.slice(1, 4, 'abc'), 'bc');
    eq(R.slice(0, -4, 'abc'), '');
    eq(R.slice(0, -3, 'abc'), '');
    eq(R.slice(0, -2, 'abc'), 'a');
    eq(R.slice(0, -1, 'abc'), 'ab');
    eq(R.slice(0, -0, 'abc'), '');
    eq(R.slice(-2, -4, 'abc'), '');
    eq(R.slice(-2, -3, 'abc'), '');
    eq(R.slice(-2, -2, 'abc'), '');
    eq(R.slice(-2, -1, 'abc'), 'b');
    eq(R.slice(-2, -0, 'abc'), '');
  });
});