import { pass } from 'rambda';

describe('R.pass', () => {
	it('happy', () => {
		const result = pass(1, 'foo')(String, Number);

		result; // $ExpectType boolean
	});
	it('with string rules', () => {
		const result = pass(1, 'foo')('string', 'number');

		result; // $ExpectType boolean
	});
});
