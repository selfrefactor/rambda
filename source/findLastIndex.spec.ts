import { findLastIndex } from './findLastIndex'

test('happy', () => {
  const result = findLastIndex((x: number) => x > 1)([1, 1, 1, 2, 3, 4, 1])
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(5)
  expect(findLastIndex((x: number) => x === 0)([0, 1, 1, 2, 3, 4, 1])).toBe(0)
})
