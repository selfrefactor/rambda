import { has } from './has.js';

test('happy', () => {
	expect(has('a')({ a: 1 })).toBeTrue();
	expect(has('b', { a: 1 })).toBeFalse();
});

test('with non-object', () => {
	expect(has('a', undefined)).toBeFalse();
	expect(has('a', null)).toBeFalse();
	expect(has('a', true)).toBeFalse();
	expect(has('a', '')).toBeFalse();
	expect(has('a', /a/)).toBeFalse();
});
