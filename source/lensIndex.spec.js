import { compose } from './compose.js';
import { keys } from './keys.js';
import { lensIndex } from './lensIndex.js';
import { over } from './over.js';
import { set } from './set.js';
import { view } from './view.js';

const testList = [{ a: 1 }, { b: 2 }, { c: 3 }];

test('focuses list element at the specified index', () => {
	expect(view(lensIndex(0), testList)).toEqual({ a: 1 });
});

test('returns undefined if the specified index does not exist', () => {
	expect(view(lensIndex(10), testList)).toBeUndefined();
});

test('sets the list value at the specified index', () => {
	expect(set(lensIndex(0), 0, testList)).toEqual([0, { b: 2 }, { c: 3 }]);
});

test('applies function to the value at the specified list index', () => {
	expect(over(lensIndex(2), keys, testList)).toEqual([{ a: 1 }, { b: 2 }, ['c']]);
});

test('can be composed', () => {
	const nestedList = [0, [10, 11, 12], 1, 2];
	const composedLens = compose(lensIndex(1), lensIndex(0));

	expect(view(composedLens, nestedList)).toBe(10);
});

test('set s (get s) === s', () => {
	expect(set(lensIndex(0), view(lensIndex(0), testList), testList)).toEqual(
		testList,
	);
});

test('get (set s v) === v', () => {
	expect(view(lensIndex(0), set(lensIndex(0), 0, testList))).toBe(0);
});

test('get (set(set s v1) v2) === v2', () => {
	expect(
		view(lensIndex(0), set(lensIndex(0), 11, set(lensIndex(0), 10, testList))),
	).toBe(11);
});
