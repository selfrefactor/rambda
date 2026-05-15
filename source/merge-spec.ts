import { merge, mergeTypes, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.merge', () => {
  const result = pipe({ foo: 1 }, merge({ bar: 2 }), mergeTypes)
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  expectTypeOf(result.bar).toEqualTypeOf<number>()
})
