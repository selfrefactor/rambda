var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('pluck', function() {
  var people = [
    {name: 'Fred', age: 23},
    {name: 'Wilma', age: 21},
    {name: 'Pebbles', age: 2}
  ];
  it('behaves as a transducer when given a transducer in list position', function() {
    var numbers = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
    var transducer = R.compose(R.pluck('a'), R.map(R.add(1)), R.take(2));
    eq(R.transduce(transducer, R.flip(R.append), [], numbers), [2, 3]);
  });
});