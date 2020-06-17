import { and } from './and'

test('happy', () => {
  expect(and(true, true)).toBeTrue()
  expect(and(true, false)).toBeFalse()
  expect(and(false, true)).toBeFalse()
  expect(and(false, false)).toBeFalse()
})
