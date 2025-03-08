import { pathSatisfies, piped } from 'rambda'

const input = { a: { b: { c: 'bar' } } }

describe('R.pathSatisfies', () => {
  it('happy', () => {
		let result = piped(
			input,
			pathSatisfies(x => {
				x // $ExpectType string
				return x !== 'foo'
			},['a','b', 'c'])
		)
		let resultStringInput = piped(
			input,
			pathSatisfies(x => {
				x // $ExpectType string
				return x !== 'foo'
			},'a.b.c')
		)
		result // $ExpectType boolean
		resultStringInput // $ExpectType boolean
  })
})
