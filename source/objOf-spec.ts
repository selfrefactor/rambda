import { objOf, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const key = 'foo'
const value = 42

it('R.objOf', () => {
  const result = pipe(value, objOf(key))
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  // @ts-expect-error
  result.bar
})
