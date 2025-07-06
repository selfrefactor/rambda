import {  transformPropObject, pipe } from 'rambda'

it('R.transformPropObject', () => {
	const result = pipe(
		{ a: 1, b: 'foo' },
		transformPropObject(x => {
			x // $ExpectType number
			return x > 2
		}, 'a'),
	)

	result // $ExpectType { b: string; a: boolean; }
})
