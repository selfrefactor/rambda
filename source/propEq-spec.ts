import { pipe, propEq } from 'rambda'

const obj = { foo: 'bar' }
const valueToMatch = 'bar'
const propToFind = 'foo'

it('R.propEq', () => {
	const result = pipe(obj, propEq(valueToMatch, propToFind))
	result // $ExpectType boolean
})
