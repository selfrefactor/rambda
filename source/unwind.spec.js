import { unwind } from './unwind.js';

test('happy', () => {
	const obj = {
		a: 1,
		b: [2, 3],
		c: [3, 4],
	};
	const expected = [
		{
			a: 1,
			b: 2,
			c: [3, 4],
		},
		{
			a: 1,
			b: 3,
			c: [3, 4],
		},
	];
	const result = unwind('b', obj);
	expect(result).toEqual(expected);
});
