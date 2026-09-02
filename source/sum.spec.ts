import { sum } from './sum'

test('happy', () => {
  const result = sum([1, 2, 3])
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(6)
})
