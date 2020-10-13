import { median } from './median'

test('happy', () => {
  expect(median([ 2 ])).toEqual(2)
  expect(median([ 7, 2, 10, 2, 9 ])).toEqual(7)
})

test('with empty array', () => {
  expect(median([])).toBeNaN()
})
