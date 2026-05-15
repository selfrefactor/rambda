import { mapObject, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.mapObject', () => {
  it('iterable with one arguments', () => {
    const result = pipe(
      { a: 1 },
      mapObject(a => {
        expectTypeOf(a).toEqualTypeOf<number>()
        return `${a}`
      }),
    )

    expectTypeOf(result).toEqualTypeOf<{ a: string; }>()
  })
  it('iterable with one arguments', () => {
    const result = pipe(
      { a: [1,2,3], b: 'foo' },
      mapObject(a => {
        expectTypeOf(a).toEqualTypeOf<string | number[]>()
        return typeof a as string
      }),
    )

    expectTypeOf(result).toEqualTypeOf<{ a: string; b: string; }>()
  })
  it('iterable with two arguments', () => {
    const result = pipe(
      { a: 1, b: 'foo' },
      mapObject((a, b) => {
        expectTypeOf(a).toEqualTypeOf<string | number>()
        expectTypeOf(b).toEqualTypeOf<"a" | "b">()
        return `${a}`
      }),
    )

    expectTypeOf(result).toEqualTypeOf<{ a: string; b: string; }>()
  })
  it('iterable with three arguments', () => {
    const result = pipe(
      { a: 1, b: 'foo' },
      mapObject((a, b, c) => {
        expectTypeOf(a).toEqualTypeOf<string | number>()
        expectTypeOf(b).toEqualTypeOf<"a" | "b">()
        expectTypeOf(c).toEqualTypeOf<{ a: number; b: string; }>()
        return `${a}`
      }),
    )

    expectTypeOf(result).toEqualTypeOf<{ a: string; b: string; }>()
  })
})
