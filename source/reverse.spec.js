import { reverse } from './reverse.js';

test('happy', () => {
	expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});

test('with string', () => {
	expect(reverse('baz')).toBe('zab');
});

test("it doesn't mutate", () => {
	const arr = [1, 2, 3];

	expect(reverse(arr)).toEqual([3, 2, 1]);

	expect(arr).toEqual([1, 2, 3]);
});
