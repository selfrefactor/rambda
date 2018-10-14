const R = require('../../rambda')

test('', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10

  expect(R.either(firstFn, secondFn)(1)).toBeTruthy()
})

test('', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10
  const fn = R.either(firstFn)(secondFn)

  expect(fn(1)).toBeTruthy()
})
