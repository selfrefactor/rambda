import { sum } from './sum'

test('happy', () => {
  expect(sum([1, 2, 3])).toEqual(6)
})

test('type test', () => {
  const result = sum([1, 2, 3])
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(6)
})
