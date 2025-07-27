import { createObjectFromKeys } from './createObjectFromKeys.js'

test('happy', () => {
	const result = createObjectFromKeys((key, index) => key.toUpperCase() + index)(['a', 'b'])
	const expected = { a: 'A0', b: 'B1' }

	expect(result).toEqual(expected)
})