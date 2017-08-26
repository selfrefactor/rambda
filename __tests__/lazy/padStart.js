const R = require('../../rambda')

test('', () => {
  expect(
    R.padStart(10, 'foo')
  ).toEqual('       foo')
})
