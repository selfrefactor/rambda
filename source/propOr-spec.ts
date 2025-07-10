import { propOr } from 'rambda'

const obj = { foo: 'bar' }
const property = 'foo'
const fallback = 'fallback'

it('R.propOr', () => {
	const result = propOr(property, fallback)(obj)
	result // $ExpectType string
})
