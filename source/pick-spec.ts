import { pick, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const input = { a: 'foo', c: 3 }

describe('R.pick', () => {
  it('with string as input', () => {
    const result = pipe(input, pick('a,c'))
    expectTypeOf(result.a).toEqualTypeOf<string>()
    expectTypeOf(result.c).toEqualTypeOf<number>()
  })
  it('with array as input', () => {
		const result = pipe(input, pick(['a', 'c']))
    expectTypeOf(result.a).toEqualTypeOf<string>()
    expectTypeOf(result.c).toEqualTypeOf<number>()
  })
	it('throws error if some keys do not exist', () => {
		// @ts-expect-error
		pipe(input, pick('a,c,b,o'))
	})
})
