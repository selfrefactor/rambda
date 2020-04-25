const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('length', () => {
  it('returns the length of a string', () => {
    eq(R.length(''), 0)
    eq(R.length('xyz'), 3)
  })
  it('returns NaN for length property of unexpected type', () => {
    eq(R.identical(NaN, R.length({ length : '' })), true)
    eq(R.identical(NaN, R.length({ length : '1.23' })), true)
    eq(R.identical(NaN, R.length({ length : null })), true)
    eq(R.identical(NaN, R.length({ length : undefined })), true)
    eq(R.identical(NaN, R.length({})), true)
  })
})
