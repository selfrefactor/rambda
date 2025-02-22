import * as R from '../rambda.js'

let list = [[1, 2, 3, 4], [3, 4, 5]]
test('happy', () => {
  const result = R.piped(
		list,
		R.filter(R.allPass([R.includes(2), R.includes(3)]))
	)
	expect(result).toEqual([[1, 2, 3, 4]])
})

test('when returns false', () => {
	let result = R.piped(
		list,
		R.filter(R.allPass([R.includes(12), R.includes(31)]))
	)
	expect(result).toEqual([])
})

test('works with multiple inputs', () => {
  const fn = (w, x, y, z) => w + x === y + z
  expect(allPass([fn])(3, 3, 3, 3)).toBeTruthy()
})
