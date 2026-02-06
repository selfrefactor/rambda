import { range } from './range.js'

test('happy', () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4, 5])
  expect(range(3, 5)).toEqual([3, 4, 5])
  expect(range(5, 3)).toEqual([])
  expect(range(5, 5)).toEqual([5])
  expect(range(0)).toEqual([0])
  expect(range(1)).toEqual([0, 1])
  expect(range(2)).toEqual([0, 1, 2])
})
