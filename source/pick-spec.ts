import { pick, pipe } from 'rambda'

const input = { a: 'foo', c: 3 }

describe('R.pick', () => {
  it('with string as input', () => {
    const result = pipe(input, pick('a,c'))
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
  it('with array as input', () => {
		const result = pipe(input, pick(['a', 'c']))
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
	it('throws error if some keys do not exist', () => {
		// @ts-expect-error
		pipe(input, pick('a,c,b,o'))
	})
})
