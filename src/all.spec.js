const R = require('../../rambda')

test('', () => {
  const numArr = [ 0, 1, 2, 3, 4 ]
  const fn = val => val > -1

  expect(R.all(fn)(numArr)).toBeTruthy()

  expect(R.all(val => val > 2, numArr)).toBeFalsy()
})
