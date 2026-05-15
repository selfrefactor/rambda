import { defaultTo, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.defaultTo', () => {
  it('happy', () => {
    const result = pipe('bar' as unknown, defaultTo('foo'))

    expectTypeOf(result).toEqualTypeOf<string>()
  })
})
