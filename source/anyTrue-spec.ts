import { anyTrue } from 'rambda';

describe('R.anyTrue', () => {
	it('happy', () => {
		const result = anyTrue('foo', [1], undefined, () => false);
		result; // $ExpectType boolean
	});
});
