const R = require('../dist/rambda.cjs')

test('', () => {
  expect(R.contains(3)([ 1, 2, 3 ])).toBeTruthy()
  expect(R.contains(4, [ 1, 2, 3 ])).toBeFalsy()
  expect(R.contains([ 42 ], [ [ 42 ] ])).toBeTruthy()
})
