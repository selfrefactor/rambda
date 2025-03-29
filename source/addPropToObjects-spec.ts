import { addPropToObjects, pipe } from 'rambda'

it('R.addPropToObjects', () => {
		let result = pipe(
			[
				{a: 1, b: 2},
				{a: 3, b: 4},
			],
			addPropToObjects(
				'c',
				(x) => String(x.a + x.b),
			)
		)
		result // $ExpectType { a: number; b: number; c: string; }[]
})
