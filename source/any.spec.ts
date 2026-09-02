import { any } from './any'
import { pipe } from './pipe'


test('happy', () => {
  const result = pipe(
    [1, 2, 3],
    any((x: number) => {
      expectTypeOf(x).toEqualTypeOf<number>()
      return x > 2
    }),
  )
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(true)
})
