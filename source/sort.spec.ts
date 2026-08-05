import { sort } from './sort'
import { pipe } from './pipe'

test('happy', () => {
  const list = [3, 0, 5, 2, 1]
  const result = pipe(list, sort((a, b) => (a > b ? 1 : -1)))
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([0, 1, 2, 3, 5])
})

test('sort', () => {
  expect(pipe([2, 3, 1], sort((a, b) => a - b))).toEqual([1, 2, 3])
})
