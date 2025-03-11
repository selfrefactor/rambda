import { test } from 'rambda'

const input = 'foo   '
const regex = /foo/

it('R.test', () => {
	const result = test(regex)(input)

	result // $ExpectType boolean
})
