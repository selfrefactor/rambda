const R = require('../../dist/rambda.cjs')

test('', () => {
  expect(
    R.padEnd(10, 'foo')
  ).toEqual('foo       ')
})
