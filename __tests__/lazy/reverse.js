const R = require('../../dist/rambda.cjs')

test('', () => {
  expect(
    R.reverse([ 1, 2, 3 ])
  ).toEqual([ 3, 2, 1 ])
})
