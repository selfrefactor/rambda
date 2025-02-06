import { slice } from './slice.js';

test('slice', () => {
	expect(slice(1, 3, ['a', 'b', 'c', 'd'])).toEqual(['b', 'c']);
	expect(slice(1, Number.POSITIVE_INFINITY, ['a', 'b', 'c', 'd'])).toEqual([
		'b',
		'c',
		'd',
	]);
	expect(slice(0, -1, ['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c']);
	expect(slice(-3, -1, ['a', 'b', 'c', 'd'])).toEqual(['b', 'c']);
	expect(slice(0, 3, 'ramda')).toBe('ram');
});
