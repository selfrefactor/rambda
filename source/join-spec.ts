import { join } from 'rambda';

describe('R.join', () => {
	it('happy', () => {
		const result = join('|', [1, 2, 3]);
		result; // $ExpectType string
	});
});
