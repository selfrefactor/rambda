import { comparator } from './comparator.js'

test('happy', () => {
  expect([3, 1, 8, 1, 2, 5].sort(comparator((a, b) => a < b))).toEqual([
    1, 1, 2, 3, 5, 8,
  ])
})
