import { endsWith } from './endsWith'

test('string ends with suffix', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTrue()
})

test('currying', () => {
  expect(endsWith('baz')('foo-bar')).toBeFalse()
})

test('list ends with suffix', () => {
  expect(() => endsWith([ 'c' ], [ 'a', 'b', 'c' ])).toThrow('list.endsWith is not a function')
})
