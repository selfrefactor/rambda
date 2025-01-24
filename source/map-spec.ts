import { filter, pipe, piped } from 'rambda';

const list = [1, 2, 3];

describe('R.filter with array', () => {
	it('happy', () => {
		const result = filter((x) => {
			x; // $ExpectType number
			return x > 1;
		}, list);
		result; // $ExpectType number[]
	});
	it('within piped', () => {
		const result = piped(
			list,
			(x) => x,
			filter((x) => {
				x; // $ExpectType number
				return x > 1;
			}),
		);
		result; // $ExpectType number[]
	});
	it('within pipe requires explicit type', () => {
		pipe(
			(x) => x,
			filter<number>((x) => {
				x; // $ExpectType number
				return x > 1;
			}),
			filter((x: number) => {
				x; // $ExpectType number
				return x > 1;
			}),
		)(list);
	});
});
