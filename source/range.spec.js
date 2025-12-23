import { range } from './range.js'

test('happy', () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4, 5])
  expect(range(3,5)).toEqual([3, 4, 5])
  expect(range(5,3)).toEqual([])
	expect(range(0)).toEqual([])
})
