import { ok } from 'rambda';

describe('R.ok', () => {
	it('happy', () => {
		const result = ok(1, 'foo')(String, Number);

		result; // $ExpectType void
	});
	it('with string rules', () => {
		const result = ok(1, 'foo')('string', 'number');

		result; // $ExpectType void
	});
});
