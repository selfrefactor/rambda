import { xor } from './xor.js';

test('compares two values with exclusive or', () => {
	expect(xor(true, true)).toBeFalse();
	expect(xor(true, false)).toBeTrue();
	expect(xor(false, true)).toBeTrue();
	expect(xor(false, false)).toBeFalse();
});

test('when both values are truthy, it should return false', () => {
	expect(xor(true, 'foo')).toBeFalse();
	expect(xor(42, true)).toBeFalse();
	expect(xor('foo', 42)).toBeFalse();
	expect(xor({}, true)).toBeFalse();
	expect(xor(true, [])).toBeFalse();
	expect(xor([], {})).toBeFalse();
	expect(xor(new Date(), true)).toBeFalse();
	expect(xor(true, Number.POSITIVE_INFINITY)).toBeFalse();
	expect(xor(Number.POSITIVE_INFINITY, new Date())).toBeFalse();
});

test('when both values are falsy, it should return false', () => {
	expect(xor(null, false)).toBeFalse();
	expect(xor(false, undefined)).toBeFalse();
	expect(xor(undefined, null)).toBeFalse();
	expect(xor(0, false)).toBeFalse();
	expect(xor(false, Number.NaN)).toBeFalse();
	expect(xor(Number.NaN, 0)).toBeFalse();
	expect(xor('', false)).toBeFalse();
});

test('when one argument is truthy and the other is falsy, it should return true', () => {
	expect(xor('foo', null)).toBeTrue();
	expect(xor(null, 'foo')).toBeTrue();
	expect(xor(undefined, 42)).toBeTrue();
	expect(xor(42, undefined)).toBeTrue();
	expect(xor(Number.POSITIVE_INFINITY, Number.NaN)).toBeTrue();
	expect(xor(Number.NaN, Number.POSITIVE_INFINITY)).toBeTrue();
	expect(xor({}, '')).toBeTrue();
	expect(xor('', {})).toBeTrue();
	expect(xor(new Date(), 0)).toBeTrue();
	expect(xor(0, new Date())).toBeTrue();
	expect(xor([], null)).toBeTrue();
	expect(xor(undefined, [])).toBeTrue();
});
