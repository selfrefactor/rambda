import { pipe, reduce } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.reduce', () => {
  const result = pipe(
    [1, 2, 3],
    reduce((acc, val) => acc + val, 10),
  )
  expectTypeOf(result).toEqualTypeOf<number>()
})
