const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('xor', () => {
  it('returns a curried function', () => {
    eq(R.xor()(true)(true), false)
    eq(R.xor()(true)(false), true)
    eq(R.xor()(false)(true), true)
    eq(R.xor()(false)(false), false)
  })
})
