import { pipe, replaceAll } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const str = 'foo bar foo'
const replacer = 'bar'
const patterns = [/foo/g, 'bar']

describe('R.replaceAll', () => {
  it('happy', () => {
    const result = pipe(str, replaceAll(patterns, replacer))

    expectTypeOf(result).toEqualTypeOf<string>()
  })
})
