const R = require('../../rambda')

test('', () => {
  expect(R.multiply(2, 4)).toEqual(8)
  expect(R.multiply(2)(4)).toEqual(8)
})
