const R = require('../../rambda')

test('not', () => {
  expect(R.not(false)).toEqual(true)
  expect(R.not(true)).toEqual(false)
  expect(R.not(0)).toEqual(true)
  expect(R.not(1)).toEqual(false)
})
