import { includes, pipe } from 'rambda'

describe('R.includes', () => {
	it('happy', () => {
		const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
		let result = pipe(
			list,
			includes({ a: { b: '1' } })
		)
		result // $ExpectType boolean
  })
  it('with string', () => {
		let result = pipe(
			'foo',
			includes('bar')
		)
		result // $ExpectType boolean
  })
})
