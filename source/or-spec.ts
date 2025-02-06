import { or } from 'rambda';

describe('R.or', () => {
	it('happy', () => {
		const result = or(true, false);
		result; // $ExpectType boolean
	});
	it('with falsy value as first input', () => {
		const result = or('', false);
		result; // $ExpectType false | ""
	});
	it('curried', () => {
		const result = or(1)('foo');
		result; // $ExpectType number | "foo"
	});
});
