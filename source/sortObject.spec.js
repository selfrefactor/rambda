import { sortObject } from './sortObject.js'

const obj = {
  c: 7,
  a: 100,
  b: 1,
	d: 4,
}

test('happy', () => {
	const predicate = (a, b, aValue, bValue) => {
		if (a === 'a') return -1
		if (b === 'a') return 1
		return aValue > bValue ? -1 : 1
	}
  const result = sortObject(predicate)(obj)
  const expected = {
		a: 100,
		c: 7,
		d: 4,
		b: 1,
	}
	console.log(result)
	expect(result).toEqual(expected)
})
