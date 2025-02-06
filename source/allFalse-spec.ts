import { allFalse } from 'rambda';

describe('R.allFalse', () => {
	it('happy', () => {
		const result = allFalse(null, false, undefined, () => false);
		result; // $ExpectType boolean
	});
});
