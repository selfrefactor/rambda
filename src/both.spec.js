const R = require('../../rambda')

test('both', () => {
  const firstFn = val => val > 0
  const secondFn = val => val < 10

  expect(R.both(firstFn, secondFn)(7)).toBeTruthy()
  expect(R.both(firstFn)(secondFn)(17)).toBeFalsy()
})
