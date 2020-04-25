const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('startsWith', () => {
  it('should return true when an array ends with the provided value', () => {
    eq(R.endsWith([ 'c' ], [ 'a', 'b', 'c' ]), true)
  })
  it('should return true when an array ends with the provided values', () => {
    eq(R.endsWith([ 'b', 'c' ], [ 'a', 'b', 'c' ]), true)
  })
  it('should return false when an array does not end with the provided value', () => {
    eq(R.endsWith([ 'b' ], [ 'a', 'b', 'c' ]), false)
  })
  it('should return false when an array does not end with the provided values', () => {
    eq(R.endsWith([ 'a', 'b' ], [ 'a', 'b', 'c' ]), false)
  })
})
