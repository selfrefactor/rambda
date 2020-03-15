import { and } from './and'

test('happy', () => {
  expect(and(true, true)).toBe(true)
  expect(and(true, false)).toBe(false)
  expect(and(false, true)).toBe(false)
  expect(and(false, false)).toBe(false)
})
