import { map, pipe, piped } from 'rambda';

const list = [1, 2, 3];

describe('R.map with array', () => {
	it('happy', () => {
		const result = map((x) => {
			x; // $ExpectType number
			return x > 1;
		}, list);
		result; // $ExpectType boolean[]
	});
	it('within piped', () => {
		const result = piped(
			list,
			(x) => x,
			map((x) => {
				x; // $ExpectType number
				return String(x);
			}),
		);
		result; // $ExpectType string[]
	});
	it('within pipe requires explicit type', () => {
		pipe(
			(x) => x,
			map((x) => {
				x; // $ExpectType number
				return x > 1;
			}),
		)(list);
	});
});
