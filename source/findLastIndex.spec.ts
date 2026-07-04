import { findLastIndex } from './findLastIndex'
import { pipe } from './pipe'

test('happy', () => {
  const result = findLastIndex((x: number) => x > 1)([1, 1, 1, 2, 3, 4, 1])
  expect(result).toBe(5)
  expect(findLastIndex((x: number) => x === 0)([0, 1, 1, 2, 3, 4, 1])).toBe(0)
})

test('type test', () => {
  const predicate = (x: number) => x > 2
  const result = pipe([1, 2, 3], findLastIndex(predicate))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})
