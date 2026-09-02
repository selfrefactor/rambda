import { rejectObject } from './rejectObject'
import { pipe } from './pipe'

test('happy', () => {
  const testInput = { a: 1, b: 2, c: 3 }
  const result = pipe(
    testInput,
    rejectObject((x) => x > 1),
  )
  expectTypeOf(result).toEqualTypeOf<{ a: number; b: number; c: number }>()
  expect(result).toEqual({ a: 1 })
})
