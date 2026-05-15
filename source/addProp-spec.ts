import { addProp, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.addProp', () => {
	const result = pipe({ a: 1, b: 'foo' }, addProp('c', 3))
	expectTypeOf(result.a).toEqualTypeOf<number>()
	expectTypeOf(result.b).toEqualTypeOf<string>()
	expectTypeOf(result.c).toEqualTypeOf<number>()
})
