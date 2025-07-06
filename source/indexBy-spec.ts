import { pipe, indexBy } from 'rambda'

it('R.indexBy', () => {
	const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}]
	const result = pipe(
		list,
		indexBy('id')
	)
	result.abc // $ExpectType {id: string, title: string}
	result.foo // $ExpectType {id: string, title: string}
})
