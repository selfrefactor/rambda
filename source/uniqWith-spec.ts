import { pipe, uniqWith } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.uniqWith', () => {
  it('happy', () => {
    const result = pipe(
      [{ a: 1 }, { a: 1 }],
      uniqWith((x, y) => x.a === y.a),
    )
    expectTypeOf(result).toEqualTypeOf<{ a: number; }[]>()
  })
})
