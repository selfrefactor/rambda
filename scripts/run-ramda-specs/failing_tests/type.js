const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('type', () => {
  // it('"Arguments" if given an arguments object', function() {
  //   var args = (function() { return arguments; }());
  //   eq(R.type(args), 'Arguments');
  // });
  it('"Number" if given the NaN value', () => {
    eq(R.type(NaN), 'Number')
  })
})
