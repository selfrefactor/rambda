import { gte } from './gte.js'

test('happy', () => {
  expect(gte(3, 5)).toBe(false)
  expect(gte(6, 4)).toBe(true)
  expect(gte(5, 5)).toBe(true)
  expect(gte(7.0, 7.0)).toBe(true)
  expect(gte('abc', 'xyz')).toBe(false)
  expect(gte('abc', 'abc')).toBe(true)
})
