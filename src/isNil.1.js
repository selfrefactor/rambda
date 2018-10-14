const R = require('../../rambda')

test('', () => {
  expect(R.isNil(null)).toBeTruthy()

  expect(R.isNil(undefined)).toBeTruthy()

  expect(R.isNil([])).toBeFalsy()
})
