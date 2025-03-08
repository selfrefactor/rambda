import { omit, piped } from 'rambda'

const input = { a: 'foo', b: 2, c: 3 }

describe('R.omit', () => {
  it('with string as input', () => {
		let result = piped(
			input,
			omit('a,b')
		)
    result.c // $ExpectType number
  })
  it('with array as input', () => {
		let result = piped(
			input,
			omit(
				['a', 'b']
			)
		)
    result.c // $ExpectType number
  })
})
