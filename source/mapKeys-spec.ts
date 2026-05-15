import { mapKeys, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.mapKeys', () => {
  const result = pipe(
    { a: 1, b: 2 },
    mapKeys((prop, x) => `${prop}-${x}`),
    mapKeys(prop => `${prop}-${prop}`),
  )
  expectTypeOf(result).toEqualTypeOf<Record<string, number>>()
})
