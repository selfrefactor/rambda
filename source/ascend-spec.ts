import { pipe, ascend, sort } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.ascend', () => {
	const result = pipe(
		[{a:1}, {a:2}],
		sort(ascend(x => x.a))
	)
	expectTypeOf(result).toEqualTypeOf<{ a: number; }[]>()
})
