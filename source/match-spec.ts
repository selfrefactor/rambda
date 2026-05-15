import { match } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const str = 'foo bar'

describe('R.match', () => {
  it('happy', () => {
    const result = match(/foo/)(str)
    expectTypeOf(result).toEqualTypeOf<string[]>()
  })
})
