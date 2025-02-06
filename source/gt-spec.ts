import { gt } from 'rambda';

describe('R.gt', () => {
	it('happy', () => {
		const result = gt(1, 2);
		const curriedResult = gt(2)(3);
		result; // $ExpectType boolean
		curriedResult; // $ExpectType boolean
	});
});
