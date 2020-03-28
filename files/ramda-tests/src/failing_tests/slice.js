var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('slice', function() {
  it('handles array-like object', function() {
    var args = (function() { return arguments; }(1, 2, 3, 4, 5));
    eq(R.slice(1, 4, args), [2, 3, 4]);
  });
});