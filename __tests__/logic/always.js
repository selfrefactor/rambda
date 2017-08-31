const R = require('../../dist/rambda.cjs')

test('', () => {
  const fn = R.always(7)
  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})
