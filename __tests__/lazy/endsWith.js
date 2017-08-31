const R = require('../../dist/rambda.cjs')

test('true', () => {
  const result = R.endsWith(
    'bar',
    'foo-bar'
  )
  expect(result).toBeTruthy()
})

test('false', () => {
  const result = R.endsWith(
    'baz',
    'foo-bar'
  )
  expect(result).toBeFalsy()
})

