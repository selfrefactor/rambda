const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('slice', () => {
  it('handles array-like object', () => {
    const args = (function (){
      return arguments
    })(
      1, 2, 3, 4, 5
    )
    eq(R.slice(
      1, 4, args
    ), [ 2, 3, 4 ])
  })
})
