const R = require('../../rambda')

test('', () => {
  expect(R.subtract(2, 1)).toEqual(1)
  expect(R.subtract(2)(1)).toEqual(1)
})
