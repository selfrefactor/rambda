import { mapKeys, pipe } from 'rambda'

it('R.mapKeys', () => {
	const result = pipe({ a: 1, b: 2 }, mapKeys((prop, x) => `${ prop }-${x}`))
	result.a // $ExpectType Record<string, number>
})
