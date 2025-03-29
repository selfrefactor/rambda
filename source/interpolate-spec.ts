import { interpolate } from 'rambda'

const templateInput = 'foo {{x}} baz'
const templateArguments = { x: 'led zeppelin' }

it('R.interpolate', () => {
	const result = interpolate(templateInput)(templateArguments)

	result // $ExpectType string
})
