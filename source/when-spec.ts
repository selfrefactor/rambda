import { head, pipe, tap, when } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

function notNull<T>(a: T | null | undefined): a is T {
  return a != null
}

describe('R.when', () => {
  it('happy', () => {
    const result = pipe(
      1,
      when(
        x => x > 2,
        x => x,
      ),
      tap(x => {
        expectTypeOf(x).toEqualTypeOf<number>()
      }),
      when(
        x => x > 2,
        x => String(x),
      ),
    )

    expectTypeOf(result).toEqualTypeOf<string | number>()
  })

	it('with assertion of type', () => {
    const result = pipe(
      [1, null, 2, 3],
      head,
      when(notNull, x => x + 1),
    )
    expectTypeOf(result).toEqualTypeOf<number | null>()
  })
})
