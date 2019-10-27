var R = require('rambda');
var eq = require('./shared/eq');

describe('path', function() {
  var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']};
  it('takes a path that contains negative indices into arrays', function() {
    eq(R.path(['x', -2], {x: ['a', 'b', 'c', 'd']}), 'c');
    eq(R.path([-1, 'y'], [{x: 1, y: 99}, {x: 2, y: 98}, {x: 3, y: 97}]), 97);
  });
  it("gets a deep property's value from objects", function() {
    eq(R.path(['a', 'b', 'c'], deepObject), 'c');
    eq(R.path(['a'], deepObject), deepObject.a);
  });
  it('returns undefined for items not found', function() {
    eq(R.path(['a', 'b', 'foo'], deepObject), undefined);
    eq(R.path(['bar'], deepObject), undefined);
    eq(R.path(['a', 'b'], {a: null}), undefined);
  });
  it('works with falsy items', function() {
    eq(R.path(['toString'], false), Boolean.prototype.toString);
  });
});