import { pluck } from './pluck.js';

test('happy', () => {
	expect(pluck('a')([{ a: 1 }, { a: 2 }, { b: 1 }])).toEqual([1, 2]);
});

test('with undefined', () => {
	expect(pluck(undefined)([{ a: 1 }, { a: 2 }, { b: 1 }])).toEqual([]);
});

test('with number', () => {
	const input = [
		[1, 2],
		[3, 4],
	];

	expect(pluck(0, input)).toEqual([1, 3]);
});
