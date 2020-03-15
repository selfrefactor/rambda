import { identical } from './identical'
import { median } from './median'

test('median', () => {
  expect(median([ 2 ])).toEqual(2)
  expect(median([ 7, 2, 10, 9 ])).toEqual(8)
  expect(identical(NaN, median([]))).toEqual(true)
})
