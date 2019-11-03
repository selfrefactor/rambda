const assert = require('assert')

const eq = require('./shared/eq')
const R = require('rambda')
describe('concat', () => {
  const z1 = {
    x      : 'z1',
    concat : function(that){ return this.x + ' ' + that.x },
  }
  const z2 = { x : 'z2' }
  it('delegates to non-String object with a concat method, as second param', () => {
    eq(R.concat(z1, z2), 'z1 z2')
  })
  it('throws if attempting to combine an array with a non-array', () => {
    assert.throws(() => R.concat([ 1 ], 2), TypeError)
  })
  it('throws if not an array, String, or object with a concat method', () => {
    assert.throws(() => R.concat({}, {}), TypeError)
  })
})
