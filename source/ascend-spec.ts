import { pipe, ascend, sort } from 'rambda'

it('R.ascend', () => {
	const result = pipe(
		[{a:1}, {a:2}],
		sort(ascend(x => x.a))
	)
	result // $ExpectType { a: number; }[]
})
