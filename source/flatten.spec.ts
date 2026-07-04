import { flatten } from './flatten'
import { pipe } from './pipe'

test('happy', () => {
  expect(flatten([1, 2, 3, [[[[[4]]]]]])).toEqual([1, 2, 3, 4])
  expect(flatten([1, [2, [[3]]], [4]])).toEqual([1, 2, 3, 4])
  expect(flatten([1, [2, [[[3]]]], [4]])).toEqual([1, 2, 3, 4])
  expect(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ])
})

test('type test', () => {
  const result = pipe([1, 2, [3, [4]]], flatten<number>)
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1, 2, 3, 4])
})
