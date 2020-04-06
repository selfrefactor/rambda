var S = require('sanctuary');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('either', function() {
  it('accepts fantasy-land applicative functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.either(Just(true), Just(true)), Just(true));
    eq(R.either(Just(true), Just(false)), Just(true));
    eq(R.either(Just(false), Just(false)), Just(false));
    eq(R.either(Just(true), Nothing()), Nothing());
    eq(R.either(Nothing(), Just(false)), Nothing());
    eq(R.either(Nothing(), Nothing()), Nothing());
  });
});