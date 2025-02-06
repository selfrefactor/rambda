import { unnest } from './unnest.js';

test('happy', () => {
	const result = unnest([1, [2], [[3]]]);
	expect(result).toEqual([1, 2, [3]]);
});

test('has no effect on simple list', () => {
	const list = [1, 2];
	const result = unnest(list);
	expect(result).toEqual([1, 2]);
});

test('flattens an array of empty arrays', () => {
	const list = [[], [], []];
	const result = unnest(list);
	expect(result).toEqual([]);
});
