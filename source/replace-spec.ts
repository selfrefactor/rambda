import { replace } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const str = 'foo bar foo'
const replacer = 'bar'

describe('R.replace', () => {
  it('happy', () => {
    const result = replace(/foo/g, replacer)(str)

    expectTypeOf(result).toEqualTypeOf<string>()
  })
  it('with string as search pattern', () => {
    const result = replace('foo', replacer)(str)

    expectTypeOf(result).toEqualTypeOf<string>()
  })
})
