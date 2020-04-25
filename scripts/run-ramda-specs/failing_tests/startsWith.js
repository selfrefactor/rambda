const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('startsWith', () => {
  it('should return true when an array starts with the provided value', () => {
    eq(R.startsWith([ 'a' ], [ 'a', 'b', 'c' ]), true)
  })
  it('should return true when an array starts with the provided values', () => {
    eq(R.startsWith([ 'a', 'b' ], [ 'a', 'b', 'c' ]), true)
  })
  it('should return false when an array does not start with the provided value', () => {
    eq(R.startsWith([ 'b' ], [ 'a', 'b', 'c' ]), false)
  })
  it('should return false when an array does not start with the provided values', () => {
    eq(R.startsWith([ 'b', 'c' ], [ 'a', 'b', 'c' ]), false)
  })
})
