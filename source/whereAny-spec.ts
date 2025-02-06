import { whereAny } from 'rambda';

describe('R.whereAny', () => {
	it('happy', () => {
		const conditions = {
			a: (a: number) => a > 1,
			b: (b: number) => b > 2,
		};
		const result = whereAny(conditions, { b: 3 });
		result; // $ExpectType boolean
	});
});
