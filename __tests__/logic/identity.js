const R = require('../../dist/rambda.cjs')

test('', () => {
  expect(R.identity(7)).toEqual(7)
})
