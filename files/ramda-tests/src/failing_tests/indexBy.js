var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('indexBy', function() {
  it('can act as a transducer', function() {
    var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
    var transducer = R.compose(
      R.indexBy(R.prop('id')),
      R.map(R.pipe(
        R.adjust(0, R.toUpper),
        R.adjust(1, R.omit(['id']))
      )));
    var result = R.into({}, transducer, list);
    eq(result, {ABC: {title: 'B'}, XYZ: {title: 'A'}});
  });
});