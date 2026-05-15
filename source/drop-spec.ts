import { drop, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.drop', () => {
  const result = pipe([1, 2, 3, 4], drop(2))
  expectTypeOf(result).toEqualTypeOf<number[]>()
})
