import { median } from 'rambda';

describe('R.median', () => {
	it('happy', () => {
		const result = median([1, 2, 3]);

		result; // $ExpectType number
	});
});
