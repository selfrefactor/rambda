var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('propOr', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};
  var nm = R.propOr('Unknown', 'name');
  it('handles number as property', function() {
    var deities = ['Cthulhu', 'Dagon', 'Yog-Sothoth'];
    eq(R.propOr('Unknown', 0, deities), 'Cthulhu');
    eq(R.propOr('Unknown', 1, deities), 'Dagon');
    eq(R.propOr('Unknown', 2, deities), 'Yog-Sothoth');
    eq(R.propOr('Unknown', -1, deities), 'Yog-Sothoth');
    eq(R.propOr('Unknown', 3, deities), 'Unknown');
  });
});