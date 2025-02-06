import { xor } from 'rambda';

describe('R.xor', () => {
	it('happy', () => {
		xor(true, false); // $ExpectType boolean
	});
	it('curry', () => {
		xor(true)(false); // $ExpectType boolean
	});
});
