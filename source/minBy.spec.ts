import { minBy } from './minBy'

test('happy', () => {
  expect(minBy(Math.abs, -5)(2)).toBe(2)
  expect(minBy(Math.abs, 2)(-5)).toBe(2)
})

test('type test', () => {
  const result = minBy(Math.abs, -5)(2)
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})
