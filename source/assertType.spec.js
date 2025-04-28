import { assertType } from './assertType.js'

test('happy', () => {
  const result = pipe(
		[1, 2, 3],
		assertType((x) => x.length === 3),
	)
	expect(result).toEqual([1, 2, 3])
})

test('throw', () => {
	expect(() => {
		pipe(
			[1, 2, 3],
			assertType((x) => x.length === 4),
		)
	}).toThrow('type assertion failed in R.assertType')
})