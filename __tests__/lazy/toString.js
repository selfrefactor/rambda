const R = require('../../dist/rambda.cjs')

test('', () => {
  expect(
    R.toString([ 1, 2, 3 ])
  ).toEqual('1,2,3')
})
