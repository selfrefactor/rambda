import { mapKeys } from "./mapKeys.js"

test('happy', () => {
	const result = mapKeys((prop, x) => `${ prop }-${x}`)({a:1, b: 2 })
	const expected = { 'a-1': 1, 'b-2': 2 }

	expect(result).toEqual(expected)
})