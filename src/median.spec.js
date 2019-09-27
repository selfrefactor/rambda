import { median } from './median'
import { identical } from './identical'

test('median', () => {
  expect(median([ 2 ])).toEqual(2)
  expect(median([ 7, 2, 10, 9 ])).toEqual(8)
  expect(identical(NaN, median([]))).toEqual(true)
})
