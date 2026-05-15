import { flattenObject, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.flattenObject', () => {
  const result = pipe({ a: { b: 1, c: 2 } }, flattenObject)
  expectTypeOf(result['a.b']).toEqualTypeOf<number>()
  expectTypeOf(result['a.c']).toEqualTypeOf<number>()
  // @ts-expect-error
  result['a.foo']
})
