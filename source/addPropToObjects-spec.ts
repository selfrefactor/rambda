import { addPropToObjects, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

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
		expectTypeOf(result).toEqualTypeOf<{ a: number; b: number; c: string; }[]>()
})
