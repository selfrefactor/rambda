import { clamp } from 'rambda';

describe('R.clamp', () => {
	it('happy', () => {
		const result = clamp(1, 10, 20);
		result; // $ExpectType number
	});
});
