import { compact, pipe } from 'rambda'

it('R.compact', () => {
		let result = pipe(
			{
				a: [ undefined, '', 'a', 'b', 'c'],
				b: [1,2, null, 0, undefined, 3],
				c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
			},
			x => ({
				a: compact(x.a),
				b: compact(x.b),
				c: compact(x.c)
			})
		)

		result.a // $ExpectType string[]
		result.b // $ExpectType number[]
		result.c // $ExpectType { a: number; b: number; c: number; f: boolean; }
})
