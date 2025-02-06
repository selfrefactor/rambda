import { or } from './or.js'

test('happy', () => {
  expect(or(0, 'foo')).toBe('foo')
  expect(or(true, true)).toBeTrue()
  expect(or(false)(true)).toBeTrue()
  expect(or(false, false)).toBeFalse()
})
