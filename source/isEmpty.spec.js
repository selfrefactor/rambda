import { isEmpty } from './isEmpty.js';

test('happy', () => {
	expect(isEmpty(0n)).toBeTrue();
	expect(isEmpty(1n)).toBeFalse();
	expect(isEmpty(undefined)).toBeFalse();
	expect(isEmpty('')).toBeTrue();
	expect(isEmpty(null)).toBeFalse();
	expect(isEmpty(' ')).toBeFalse();
	expect(isEmpty(/(?:)/)).toBeFalse();
	expect(isEmpty([])).toBeTrue();
	expect(isEmpty([[]])).toBeFalse();
	expect(isEmpty({})).toBeTrue();
	expect(isEmpty({ x: 0 })).toBeFalse();
	expect(isEmpty(0)).toBeFalse();
	expect(isEmpty(Number.NaN)).toBeFalse();
	expect(isEmpty([''])).toBeFalse();
});
