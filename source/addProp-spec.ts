import { addProp, pipe } from 'rambda'

it('R.addProp', () => {
	const result = pipe({ a: 1, b: 'foo' }, addProp('c', 3))
	result.a // $ExpectType number
	result.b // $ExpectType number
	result.c // $ExpectType number
})
