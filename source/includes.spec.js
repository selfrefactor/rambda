import { includes as includesRamda } from 'ramda';

import { includes } from './includes.js';

test('with string as iterable', () => {
	const str = 'foo bar';

	expect(includes('bar')(str)).toBeTrue();
	expect(includesRamda('bar')(str)).toBeTrue();
	expect(includes('never', str)).toBeFalse();
	expect(includesRamda('never', str)).toBeFalse();
});

test('with array as iterable', () => {
	const arr = [1, 2, 3];

	expect(includes(2)(arr)).toBeTrue();
	expect(includesRamda(2)(arr)).toBeTrue();

	expect(includes(4, arr)).toBeFalse();
	expect(includesRamda(4, arr)).toBeFalse();
});

test('with list of objects as iterable', () => {
	const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];

	expect(includes({ c: 3 }, arr)).toBeTrue();
	expect(includesRamda({ c: 3 }, arr)).toBeTrue();
});

test('with NaN', () => {
	const result = includes(Number.NaN, [Number.NaN]);
	const ramdaResult = includesRamda(Number.NaN, [Number.NaN]);
	expect(result).toBeTrue();
	expect(ramdaResult).toBeTrue();
});

test('with wrong input that does not throw', () => {
	const result = includes(1, /foo/g);
	const ramdaResult = includesRamda(1, /foo/g);
	expect(result).toBeFalse();
	expect(ramdaResult).toBeFalse();
});

test('throws on wrong input - match ramda behaviour', () => {
	expect(() => includes(2, null)).toThrowWithMessage(
		TypeError,
		"Cannot read property 'indexOf' of null",
	);
	expect(() => includesRamda(2, null)).toThrowWithMessage(
		TypeError,
		"Cannot read properties of null (reading 'indexOf')",
	);
	expect(() => includes(2, undefined)).toThrowWithMessage(
		TypeError,
		"Cannot read property 'indexOf' of undefined",
	);
	expect(() => includesRamda(2, undefined)).toThrowWithMessage(
		TypeError,
		"Cannot read properties of undefined (reading 'indexOf')",
	);
});
