import { product } from 'rambda';

describe('R.product', () => {
	it('happy', () => {
		const result = product([1, 2, 3]);

		result; // $ExpectType number
	});
});
