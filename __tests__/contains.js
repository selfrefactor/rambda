const R = require('../rambda')

test('', () => {
  expect(R.contains(3)([ 1, 2, 3 ])).toBeTruthy()
  expect(R.contains(4, [ 1, 2, 3 ])).toBeFalsy()
  expect(R.contains(4, {})).toBe(false)
  expect(typeof R.contains(4, undefined)).toBe('function')
  expect(R.contains([ 42 ], [ [ 42 ] ])).toBeTruthy()
})
