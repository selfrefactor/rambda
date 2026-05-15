import { findIndex, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

it('R.findIndex', () => {
  const result = pipe(
    list,
    findIndex(x => x > 2),
  )
  expectTypeOf(result).toEqualTypeOf<number>()
})
