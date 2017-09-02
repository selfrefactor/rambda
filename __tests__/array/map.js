const R = require('../../rambda')

test.skip('with array', () => {
  const double = x => x * 2
  expect(
    R.map(double, [ 1, 2, 3 ])
  ).toEqual([ 2, 4, 6 ])
})

test('with object', () => {
  const double = x => x * 2
  const obj = {
    a : 1,
    b : 2,
  }
  expect(
    R.map(double, obj)
  ).toEqual({
    a : 2,
    b : 4,
  })
})
