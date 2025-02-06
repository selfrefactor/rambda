import { lte } from 'rambda';

describe('R.lte', () => {
	it('happy', () => {
		const result = lte(1, 2);
		const curriedResult = lte(2)(3);
		result; // $ExpectType boolean
		curriedResult; // $ExpectType boolean
	});
});
