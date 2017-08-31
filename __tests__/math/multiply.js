const R = require('../../dist/rambda.cjs')

test('', () => {
  expect(
    R.multiply(2, 4)
  ).toEqual(8)
  expect(
    R.multiply(2)(4)
  ).toEqual(8)
})
