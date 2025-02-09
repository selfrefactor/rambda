import { median } from './median.js'

test('happy', () => {
  expect(median([2])).toBe(2)
  expect(median([7, 2, 10, 2, 9])).toBe(7)
})

test('with empty array', () => {
  expect(median([])).toBeNaN()
})
