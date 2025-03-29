import { range } from './range.js'

test('happy', () => {
  expect(range(0)(5)).toEqual([0, 1, 2, 3, 4])
	expect(range(7)(3)).toEqual([7, 6, 5, 4])
	expect(range(5)(5)).toEqual([])
})
