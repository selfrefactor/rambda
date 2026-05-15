import { interpolate } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const templateInput = 'foo {{x}} baz'
const templateArguments = { x: 'led zeppelin' }

it('R.interpolate', () => {
	const result = interpolate(templateInput)(templateArguments)

	expectTypeOf(result).toEqualTypeOf<string>()
})
