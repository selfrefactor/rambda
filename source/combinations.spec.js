import { combinations } from './combinations'

test('happy', () => {
  const result = combinations(2)([1, 2, 3])
	const expected = [
		[1, 2],
		[1, 3],
		[2, 3],
	]
	expect(result).toEqual(expected)
})