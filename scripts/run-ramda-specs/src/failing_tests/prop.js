var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('prop', function() {
  var fred = {name: 'Fred', age: 23};
  it('handles number as property', function() {
    var deities = ['Cthulhu', 'Dagon', 'Yog-Sothoth'];
    eq(R.prop(0, deities), 'Cthulhu');
    eq(R.prop(1, deities), 'Dagon');
    eq(R.prop(2, deities), 'Yog-Sothoth');
    eq(R.prop(-1, deities), 'Yog-Sothoth');
  });
});