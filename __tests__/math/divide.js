const R = require('../../rambda')

test('', () => {
  expect(R.divide(71, 100)).toEqual(0.71)
  expect(R.divide(71)(100)).toEqual(0.71)
})

