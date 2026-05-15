import { path, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const input = { a: { b: { c: true } } }

describe('R.path with string as path', () => {
  it('happy', () => {
    const result = pipe(input, path(['a', 'b']))
    const resultStringInput = pipe(input, path('a.b.c'))
    expectTypeOf(result.c).toEqualTypeOf<boolean>()
    expectTypeOf(resultStringInput).toEqualTypeOf<boolean>()
  })
  it('happy', () => {
    const result = pipe([1, 2, 3], path([1]))
    expectTypeOf(result).toEqualTypeOf<number>()
  })
})
