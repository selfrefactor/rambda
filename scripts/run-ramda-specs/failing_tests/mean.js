const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('mean', () => {
  it('handles array-like object', () => {
    eq(R.mean((function (){
      return arguments
    })(
      1, 2, 3
    )),
    2)
  })
})
