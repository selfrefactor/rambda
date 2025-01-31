import { add, filter, map, pipe } from 'rambda';

describe('R.pipe', () => {
	it('with R.filter', () => {
		const result = pipe(
			filter<number>((x) => x > 2),
			map(add(1)),
		)([1, 2, 3]);
		result; // $ExpectType number[]
	});

	it('with native filter', () => {
		const result = pipe(
			(list: number[]) => list.filter((x) => x > 2),
			(list: number[]) => {
				list; // $ExpectType number[]
				return list;
			},
			map(add(1)),
		)([1, 2, 3]);

		result; // $ExpectType number[]
	});

	it('with void', () => {
		const result = pipe(
			() => {},
			() => {},
		)();
		result; // $ExpectType void
	});
});

describe('R.pipe - @types/ramda tests', () => {
	test('complex', () => {
		const fn = pipe(Math.pow, negate, inc, inc, inc, inc, inc, inc, inc, inc);
		const result = fn(3, 4);
		result; // $ExpectType number
	});
});
