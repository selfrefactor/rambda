import { excludes, pipe } from 'rambda'

describe('R.excludes', () => {
	it('happy', () => {
		const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
		let result = pipe(
			list,
			excludes({ a: { b: '1' } })
		)
		result // $ExpectType boolean
  })
  it('with string', () => {
		let result = pipe(
			'foo',
			excludes('bar')
		)
		result // $ExpectType boolean
  })
})
