const R = require('../../dist/rambda.cjs')

test('', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10
  expect(R.either(firstFn, secondFn)(1)).toBeTruthy()
  expect(R.either(firstFn, secondFn)(-7)).toBeFalsy()
})
