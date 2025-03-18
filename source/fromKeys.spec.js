import { fromKeys } from './fromKeys.js'

test('happy', () => {
	const result = fromKeys(['a', 'b'])(key => key.toUpperCase())
	const expected = { a: 'A', b: 'B' }

	expect(result).toEqual(expected)
})