import { minBy } from './minBy'


test('happy', () => {
  const result = minBy<number>(Math.abs, -5)(2)
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})
