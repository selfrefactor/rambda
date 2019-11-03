const eq = require('./shared/eq')
const R = require('rambda')

describe('adjust', () => {
  it('accepts an array-like object', () => {
    function args(){
      return arguments
    }
    eq(R.adjust(2, R.add(1), args(0, 1, 2, 3)), [ 0, 1, 3, 3 ])
  })
})
