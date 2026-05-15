import { join, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.join', () => {
  const result = pipe([1, 2, 3], join('|'))
  expectTypeOf(result).toEqualTypeOf<string>()
})
