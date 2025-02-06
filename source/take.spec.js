import { take } from './take.js';

test('happy', () => {
	const arr = ['foo', 'bar', 'baz'];

	expect(take(1, arr)).toEqual(['foo']);

	expect(arr).toEqual(['foo', 'bar', 'baz']);

	expect(take(2)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar']);
	expect(take(3, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
	expect(take(4, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
	expect(take(3)('rambda')).toBe('ram');
});

test('with negative index', () => {
	expect(take(-1, [1, 2, 3])).toEqual([1, 2, 3]);
	expect(take(Number.NEGATIVE_INFINITY, [1, 2, 3])).toEqual([1, 2, 3]);
});

test('with zero index', () => {
	expect(take(0, [1, 2, 3])).toEqual([]);
});
