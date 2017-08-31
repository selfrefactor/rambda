const R = require('../../dist/rambda.cjs')

test('true', () => {
  const result = R.startsWith(
    'foo',
    'foo-bar'
  )
  expect(result).toBeTruthy()
})

test('false', () => {
  const result = R.startsWith(
    'baz',
    'foo-bar'
  )
  expect(result).toBeFalsy()
})
