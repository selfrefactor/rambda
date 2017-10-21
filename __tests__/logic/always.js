const R = require('../../rambda')

test('', () => {
  const fn = R.always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})
