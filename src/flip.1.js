const R = require('../../rambda')

test('flip', () => {
  const fn = R.flip(R.subtract)

  expect(fn(1)(7)).toEqual(6)
  expect(fn(1, 7)).toEqual(6)
  expect(fn(1, 7, 9)).toEqual(undefined)
})
