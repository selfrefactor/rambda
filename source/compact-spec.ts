import { compact, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.compact', () => {
		let result = pipe(
			{
				a: [ undefined, '', 'a', 'b', 'c', null ],
				b: [1,2, null, 0, undefined, 3],
				c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
			},
			x => ({
				a: compact(x.a),
				b: compact(x.b),
				c: compact(x.c)
			})
		)

		expectTypeOf(result.a).toEqualTypeOf<string[]>()
		expectTypeOf(result.b).toEqualTypeOf<number[]>()
		expectTypeOf(result.c).toEqualTypeOf<{ a: number; b: number; c: number; f: boolean; }>()
})
