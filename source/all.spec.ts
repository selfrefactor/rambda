import { all } from './all'
import { pipe } from './pipe'

const list = [0, 1, 2, 3, 4]

test('happy', () => {
  const result = pipe(
    [1, 2, 3],
    all((x: number) => {
      expectTypeOf(x).toEqualTypeOf<number>()
      return x > 0
    }),
  )
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(true)
})

test('when true', () => {
  const fn = (x: number) => x > -1

  expect(all(fn)(list)).toBeTruthy()
})

test('when false', () => {
  const fn = (x: number) => x > 2

  expect(all(fn)(list)).toBeFalsy()
})
