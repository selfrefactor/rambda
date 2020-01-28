import { identical } from './identical'
import { mean } from './mean'

test('mean', () => {
  expect(mean([ 2, 7 ])).toBe(4.5)
  expect(identical(NaN, mean([]))).toBe(true)
})
