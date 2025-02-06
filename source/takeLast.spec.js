import { takeLast } from './takeLast.js';

test('with arrays', () => {
	expect(takeLast(1, ['foo', 'bar', 'baz'])).toEqual(['baz']);

	expect(takeLast(2)(['foo', 'bar', 'baz'])).toEqual(['bar', 'baz']);

	expect(takeLast(3, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);

	expect(takeLast(4, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);

	expect(takeLast(10, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
});

test('with strings', () => {
	expect(takeLast(3, 'rambda')).toBe('bda');

	expect(takeLast(7, 'rambda')).toBe('rambda');
});

test('with negative index', () => {
	expect(takeLast(-1, [1, 2, 3])).toEqual([1, 2, 3]);
	expect(takeLast(Number.NEGATIVE_INFINITY, [1, 2, 3])).toEqual([1, 2, 3]);
});
