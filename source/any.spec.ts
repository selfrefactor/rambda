import { any } from './any'
import { pipe } from './pipe'

const list = [1, 2, 3]

test('happy', () => {
  expect(any((x: number) => x > 2)(list)).toBeTruthy()
})

test('type test', () => {
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
