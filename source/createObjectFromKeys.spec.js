import { createObjectFromKeys } from './createObjectFromKeys.js'

test('happy', () => {
	const result = createObjectFromKeys(['a', 'b'])((key, index) => key.toUpperCase() + index)
	const expected = { a: 'A0', b: 'B1' }

	expect(result).toEqual(expected)
})