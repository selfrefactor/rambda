import { both } from 'rambda';

describe('R.both', () => {
	it('with passed type', () => {
		const fn = both<number[]>(
			(x) => x > 1,
			(x) => x % 2 === 0,
		);
		fn(2); // $ExpectType boolean
	});
	it('no type passed', () => {
		const fn = both(
			(x) => {
				// @ts-expect-error
				return x > 1;
			},
			(x) => {
				// @ts-expect-error
				return x % 2 === 0;
			},
		);
		fn(2); // $ExpectType boolean
	});
	it('only one type passed in predicate', () => {
		const fn = both(
			(x: number) => {
				x; // $ExpectType number
				return x > 1;
			},
			(x) => {
				x; // $ExpectType number
				return x % 2 === 0;
			},
		);
		fn(2); // $ExpectType boolean
	});
});
