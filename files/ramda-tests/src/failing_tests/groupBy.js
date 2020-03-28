var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
var _isTransformer = require('rambda/internal/_isTransformer');

describe('groupBy', function() {
  it('dispatches on transformer objects in list position', function() {
    var byType = R.prop('type');
    var xf = {
      '@@transducer/init': function() { return {}; },
      '@@transducer/result': function(x) { return x; },
      '@@transducer/step': R.mergeRight
    };
    eq(_isTransformer(R.groupBy(byType, xf)), true);
  });
});