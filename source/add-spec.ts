import { add } from 'rambda';

describe('R.add', () => {
	it('curried', () => {
		const result = add(4)(1);

		result; // $ExpectType number
	});
});
