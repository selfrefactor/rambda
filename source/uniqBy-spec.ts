import { uniqBy } from 'rambda';

describe('R.uniqBy', () => {
	it('happy', () => {
		const result = uniqBy(Math.abs, [-2, -1, 0]);

		result; // $ExpectType number[]
	});
	it('curried', () => {
		const result = uniqBy(Math.abs)([-2, -1, 0]);

		result; // $ExpectType number[]
	});
});
