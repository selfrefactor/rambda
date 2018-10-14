const R = require('../rambda')

test('', () => {
  expect(R.range(
    0,
    10
  )).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})

test('', () => {
  expect(R.range(0)(10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})
