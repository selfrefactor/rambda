import { or } from './or.js'

test('happy', () => {
  expect(or(0, 'foo')).toBe('foo')
  expect(or(true, true)).toBeTruthy()
  expect(or(false)(true)).toBeTruthy()
  expect(or(false, false)).toBeFalsy()
})
