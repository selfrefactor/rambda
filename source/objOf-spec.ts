import { objOf, pipe } from 'rambda'

const key = 'foo'
const value = 42

it('R.objOf', () => {
	const result = pipe(value, objOf(key))
	result.foo // $ExpectType number
	// @ts-expect-error
	result.bar
})
