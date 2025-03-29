import { pipe } from "./pipe.js"
import { addPropToObjects } from "./addPropToObjects.js"

test('R.addPropToObjects', () => {
		let result = pipe(
			[
				{a: 1, b: 2},
				{a: 3, b: 4},
			],
			addPropToObjects(
				'c',
				(x) => String(x.a + x.b),
			)
		)
		expect(result).toEqual([
			{ a: 1, b: 2, c: '3' },
			{ a: 3, b: 4, c: '7' },
		])
})
