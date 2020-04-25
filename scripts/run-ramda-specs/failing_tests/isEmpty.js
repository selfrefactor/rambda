const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('isEmpty', () => {
  it('returns true for empty typed array', () => {
    eq(R.isEmpty(Uint8Array.from('')), true)
    eq(R.isEmpty(Float32Array.from('')), true)
    eq(R.isEmpty(new Float32Array([])), true)
    eq(R.isEmpty(Uint8Array.from('1')), false)
    eq(R.isEmpty(Float32Array.from('1')), false)
    eq(R.isEmpty(new Float32Array([ 1 ])), false)
  })
})
