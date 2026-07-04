import { rejectObject } from './rejectObject'
import { pipe } from './pipe'

test('happy', () => {
  const testInput = { a: 1, b: 2, c: 3 }
  const result = pipe(
    testInput,
    rejectObject((x, prop) => x > 1),
  )
  expect(result).toEqual({ a: 1 })
})

test('type test', () => {
  const result = pipe({ a: 1, b: 2 }, rejectObject(x => x > 1))
  expectTypeOf(result).toEqualTypeOf<Partial<{ a: number; b: number }>>()
  expect(result).toEqual({ a: 1 })
})
