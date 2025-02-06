import { isObject } from './isObject.js';

test('happy', () => {
	expect(isObject({})).toBeTruthy();
});

test('with array', () => {
	expect(isObject([])).toBeFalsy();
});

test('with object-alike boolean', () => {
	expect(isObject(new Boolean(true))).toBeFalsy();
});
