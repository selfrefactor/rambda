import { gt } from './gt.js'

test('reports whether one item is greater than another', () => {
  expect(gt(3, 5)).toBe(false)
  expect(gt(6, 4)).toBe(true)
  expect(gt(7.0, 7.0)).toBe(false)
  expect(gt('abc', 'xyz')).toBe(false)
  expect(gt('abcd', 'abc')).toBe(true)
})
