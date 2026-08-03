import { unless } from './unless'
import { pipe } from './pipe'

test('happy', () => {
  expect(
    unless(
      (x: number) => x > 10,
      x => x + 1,
    )(20),
  ).toEqual(20)
  expect(
    unless(
      (x: number) => x > 10,
      x => x + 1,
    )(5),
  ).toEqual(6)
})

const inc = (x: number) => x + 1

test('type test', () => {
  const result = pipe(
    1,
    unless(x => x > 5, inc),
  )

  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})

test('with two different types', () => {
  const result = pipe(
    1,
    unless(
      x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return x > 5
      },
      x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return `${x}-foo`
      },
    ),
  )

  expectTypeOf(result).toEqualTypeOf<string | number>()
  expect(result).toBe('1-foo')
})
