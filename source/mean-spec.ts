import { mean } from 'rambda';

describe('R.mean', () => {
	it('happy', () => {
		const result = mean([1, 2, 3]);

		result; // $ExpectType number
	});
});
