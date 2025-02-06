import { not } from 'rambda';

describe('R.not', () => {
	it('happy', () => {
		const result = not(4);

		result; // $ExpectType boolean
	});
});
