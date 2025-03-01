import { equals } from './equals.js'
import { sortObject } from './sortObject.js'

const obj = {
  c: 1,
  a: 2,
  b: 3,
}

test('happy', () => {
	const result = sortObject(obj)
	const expected = {
		a: 2,
		b: 3,
		c: 1,
	}
	expect(equals(expected)(result)).toBe(true)
	expect(equals(obj)(result)).toBe(false)
})