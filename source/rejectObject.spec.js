import { pipe } from './pipe.js'
import { rejectObject } from './rejectObject.js'

test('happy', () => {
	let testInput = { a: 1, b: 2, c: 3 }
  const result = pipe(
		testInput,
		rejectObject((x, prop, obj) => {
			expect(prop).toBeOneOf(['a', 'b', 'c'])
			expect(obj).toBe(testInput)
			return x > 1
		})
	)
	expect(result).toEqual({ a:1 })
})