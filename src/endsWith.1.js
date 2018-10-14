const R = require('../../rambda')

test('string ends with suffix', () => {
  expect(R.endsWith('bar', 'foo-bar')).toBeTruthy()
})

test('currying', () => {
  expect(R.endsWith('baz')('foo-bar')).toBeFalsy()
})

test('list ends with suffix', () => {
  expect(R.endsWith(['c'], ['a', 'b', 'c'])).toBeTruthy()
})
