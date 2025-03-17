import { range } from './range.js'

test('happy', () => {
  expect(range(0)(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('end range is bigger than start range', () => {
  expect(range(7)(3)).toEqual([])
  expect(range(5)(5)).toEqual([])
})
