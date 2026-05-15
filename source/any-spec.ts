import { any, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.any', () => {
  const result = pipe(
    [1, 2, 3],
    any(x => {
      expectTypeOf(x).toEqualTypeOf<number>()
      return x > 2
    }),
  )
  expectTypeOf(result).toEqualTypeOf<boolean>()
})
