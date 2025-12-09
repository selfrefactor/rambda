import { unionWith } from './unionWith.js'
import { pipe } from './pipe.js'

test('happy', () => {
	const list1 = [{a: 1, b: 1}, {a: 2, b: 1}]
	const list2 = [{a: 2, b: 2}, {a: 3, b: 2}]
	const result = pipe(
		list2,
		unionWith((x, y) => {
			return x.a === y.a
		}, list1),
	)
	expect(result).toEqual([{a: 1, b: 1}, {a: 2, b: 1}, {a: 3, b: 2}])
})

