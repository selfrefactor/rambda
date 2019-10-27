var assert = require('assert');

var R = require('rambda');
var eq = require('./shared/eq');
describe('concat', function() {
  var z1 = {
    x: 'z1',
    concat: function(that) { return this.x + ' ' + that.x; }
  };
  var z2 = {
    x: 'z2'
  };
  it('delegates to non-String object with a concat method, as second param', function() {
    eq(R.concat(z1, z2), 'z1 z2');
  });
  it('throws if attempting to combine an array with a non-array', function() {
    assert.throws(function() { return R.concat([1], 2); }, TypeError);
  });
  it('throws if not an array, String, or object with a concat method', function() {
    assert.throws(function() { return R.concat({}, {}); }, TypeError);
  });
});