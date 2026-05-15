import { sortByProps } from 'rambdax'
import { describe, expectTypeOf, it } from 'vitest'

const list = [{ a: { b: 3 } }, { a: { b: 2 } }, { a: { b: 1 } }]

describe('R.sortByProps', () => {
  it('happy', () => {
    const result = sortByProps(['foo.bar', 'a.b'], list)

    expectTypeOf(result).toEqualTypeOf<{ a: { b: number; }; }[]>()
  })
  it('curried', () => {
    const result = sortByProps(['foo.bar', 'a.b'])(list)

    expectTypeOf(result).toEqualTypeOf<{ a: { b: number; }; }[]>()
  })
})
