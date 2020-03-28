var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('intersperse', function() {
  it('dispatches', function() {
    var obj = {intersperse: function(x) { return 'override ' + x; }};
    eq(R.intersperse('x', obj), 'override x');
  });
});