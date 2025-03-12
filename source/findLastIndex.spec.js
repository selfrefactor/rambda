import { findLastIndex } from './findLastIndex.js'

test('happy', () => {
  const result = findLastIndex(x => x > 1)([1, 1, 1, 2, 3, 4, 1])
  expect(result).toBe(5)
  expect(findLastIndex(x => x === 0)([0, 1, 1, 2, 3, 4, 1])).toBe(0)
})