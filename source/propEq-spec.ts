import { pipe, propEq } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const obj = { foo: 'bar' }
const valueToMatch = 'bar'
const propToFind = 'foo'

it('R.propEq', () => {
	const result = pipe(obj, propEq(valueToMatch, propToFind))
	expectTypeOf(result).toEqualTypeOf<boolean>()
})
