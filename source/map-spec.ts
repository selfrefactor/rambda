import { expectTypeOf, it } from 'vitest'
import { map, pipe } from 'rambda'

const list = [1, 2, 3]

it('R.map', () => {
  const result = pipe(
    list,
    x => x,
    map(x => {
      expectTypeOf(x).toEqualTypeOf<number>()
      return String(x)
    }),
  )
  expectTypeOf(result).toEqualTypeOf<string[]>()
})

it('R.map - index in functor', () => {
  const result = pipe(
    list,
    x => x,
    map((x, i) => {
      expectTypeOf(x).toEqualTypeOf<number>()
      expectTypeOf(i).toEqualTypeOf<number>()
      return String(x)
    }),
  )
  expectTypeOf(result).toEqualTypeOf<string[]>()
})

it('R.map - without pipe', () => {
  map(x => {
    expectTypeOf(x).toEqualTypeOf<unknown>()
  })([1, 2, 3])
})

it('R.map - without pipe but explicitly typed', () => {
  const result = map<number[], string>(x => {
    expectTypeOf(x).toEqualTypeOf<number>()
    return String(x)
  })([1, 2, 3])
  expectTypeOf(result).toEqualTypeOf<string[]>()
})
