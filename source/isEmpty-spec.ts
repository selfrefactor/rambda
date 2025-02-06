import { isEmpty } from 'rambda';

describe('R.isEmpty', () => {
	it('happy', () => {
		const result = isEmpty('foo');
		result; // $ExpectType boolean
	});
});
