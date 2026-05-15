import { pipe, indexBy } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.indexBy', () => {
	const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}]
	const result = pipe(
		list,
		indexBy('id')
	)
	expectTypeOf(result.abc).toEqualTypeOf<{ id: string; title: string; }>()
	expectTypeOf(result.foo).toEqualTypeOf<{ id: string; title: string; }>()
})
