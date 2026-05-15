import { pathSatisfies, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const input = { a: { b: { c: 'bar' } } }

describe('R.pathSatisfies', () => {
  it('happy', () => {
    const result = pipe(
      input,
      pathSatisfies(
        x => {
          expectTypeOf(x).toEqualTypeOf<string>()
          return x !== 'foo'
        },
        ['a', 'b', 'c'],
      ),
    )
    const resultStringInput = pipe(
      input,
      pathSatisfies(x => {
        expectTypeOf(x).toEqualTypeOf<string>()
        return x !== 'foo'
      }, 'a.b.c'),
    )
    expectTypeOf(result).toEqualTypeOf<boolean>()
    expectTypeOf(resultStringInput).toEqualTypeOf<boolean>()
  })
})
