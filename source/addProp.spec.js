import { addProp } from './addProp.js'

test('happy', () => {
	const result = addProp('a', 1)({ b: 2 })
	const expected = { a: 1, b: 2 }

	expect(result).toEqual(expected)
})