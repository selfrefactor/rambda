var R = require('../../../../dist/rambda.js');
var eq = require('./shared/eq');

describe('propIs', function() {
  it('handles number as property', function() {
    var deities = ['Cthulhu', 'Dagon', 'Yog-Sothoth'];
    eq(R.propIs(String, 0, deities), true);
    eq(R.propIs(String, 1, deities), true);
    eq(R.propIs(String, 2, deities), true);
    eq(R.propIs(String, -1, deities), true);
    eq(R.propIs(String, 3, deities), false);
  });
});