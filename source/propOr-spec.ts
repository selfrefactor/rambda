import { propOr } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const obj = { foo: 'bar' }
const property = 'foo'
const fallback = 'fallback'

it('R.propOr', () => {
	const result = propOr(property, fallback)(obj)
	expectTypeOf(result).toEqualTypeOf<string>()
})
