const R = require('../../dist/rambda.cjs')

test('', () => {
  expect(
    R.padStart(10, 'foo')
  ).toEqual('       foo')
})
