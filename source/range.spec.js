import { range, rangeDescending } from './range.js'

test('happy', () => {
  expect(range(0)(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('end range is bigger than start range', () => {
  expect(range(7)(3)).toEqual([])
  expect(range(5)(5)).toEqual([])
})

test('descending', () => {
	expect(rangeDescending(5)(0)).toEqual([5, 4, 3, 2, 1, 0])
})

test('descending end range is bigger than start range', () => {
	expect(rangeDescending(3)(7)).toEqual([])
	expect(rangeDescending(5)(5)).toEqual([])
})