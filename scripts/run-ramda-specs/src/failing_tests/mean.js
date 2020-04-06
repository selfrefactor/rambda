var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('mean', function() {
  it('handles array-like object', function() {
    eq(R.mean((function() { return arguments; })(1, 2, 3)), 2);
  });
});