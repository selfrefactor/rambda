import { omit, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const input = { a: 'foo', b: 2, c: 3 }

describe('R.omit', () => {
  it('with string as input', () => {
    const result = pipe(input, omit('a,b'))
    expectTypeOf(result.c).toEqualTypeOf<number>()
  })
  it('with array as input', () => {
    const result = pipe(input, omit(['a', 'b']))
    expectTypeOf(result.c).toEqualTypeOf<number>()
  })
})
