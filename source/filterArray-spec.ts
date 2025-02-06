import { filterArray } from 'rambda';

const list = [1, 2, 3];

describe('R.filterArray', () => {
	it('happy', () => {
		const result = filterArray((x) => {
			x; // $ExpectType number
			return x > 1;
		}, list);
		result; // $ExpectType number[]
	});
	it('curried', () => {
		const result = filterArray<number>((x) => {
			x; // $ExpectType number
			return x > 1;
		})(list);
		result; // $ExpectType number[]
	});
});
