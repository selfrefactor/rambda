const eq = require('./shared/eq')
const R = require('rambda')

describe('update', () => {
  it('accepts an array-like object', () => {
    function args(){
      return arguments
    }
    eq(R.update(2, 4, args(0, 1, 2, 3)), [ 0, 1, 4, 3 ])
  })
})
