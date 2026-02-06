import { rangeDescending } from './rangeDescending.js'

test('happy', () => {
  expect(rangeDescending(5)).toEqual([5, 4, 3, 2, 1, 0])
  expect(rangeDescending(7, 3)).toEqual([7, 6, 5, 4, 3])
  expect(rangeDescending(0)).toEqual([0])
  expect(rangeDescending(1)).toEqual([1, 0])
  expect(rangeDescending(2)).toEqual([2, 1, 0])
  expect(rangeDescending(5, 7)).toEqual([])
  expect(rangeDescending(5, 5)).toEqual([5])
})
