import { path, piped } from 'rambda'

const input = { a: { b: { c: true } } }

describe('R.path with string as path', () => {
  it('happy', () => {
		let result = piped(
			input,
			path(['a','b',])
		)
		let resultStringInput = piped(
			input,
			path('a.b.c')
		)
		result // $ExpectType boolean
		resultStringInput // $ExpectType boolean
  })
})
