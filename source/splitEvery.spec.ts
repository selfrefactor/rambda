import { splitEvery } from './splitEvery'
import { pipe } from './pipe'

test('happy', () => {
  expect(splitEvery(3)([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3], [4, 5, 6], [7]])
})

test('type test', () => {
  const result = pipe([1, 2, 3, 4, 5, 6, 7], splitEvery(3))
  expectTypeOf(result).toEqualTypeOf<number[][]>()
  expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]])
})
