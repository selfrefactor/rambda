import { median } from './median'

test('happy', () => {
  expect(median([ 2 ])).toEqual(2)
  expect(median([ 7, 2, 10, 9 ])).toEqual(8)
})

test('with empty array', () => {
  expect(median([])).toBeNaN()
})
