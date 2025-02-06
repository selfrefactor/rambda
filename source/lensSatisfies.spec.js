import { lensIndex } from './lensIndex.js';
import { lensPath } from './lensPath.js';
import { lensSatisfies } from './lensSatisfies.js';

const predicate = (x) => x > 1;

test('with list', () => {
	const lens = lensIndex(0);
	const fn = lensSatisfies(predicate, lens);
	expect(fn([10, 20, 30])).toBeTrue();
	expect(fn([1, 2, 3])).toBeFalse();
});

test('with R.lensPath', () => {
	const input1 = { a: { b: 10 } };
	const input2 = { a: { b: 1 } };
	const lens = lensPath('a.b');
	const fn = lensSatisfies(predicate, lens);

	expect(fn(input1)).toBeTrue();
	expect(fn(input2)).toBeFalse();
});
