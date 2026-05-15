import { intersperse } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.intersperse', () => {
  it('curried', () => {
    const result = intersperse('|')(['foo', 'bar'])
    expectTypeOf(result).toEqualTypeOf<string[]>()
  })
})
