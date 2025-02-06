import { clone } from 'rambda';

describe('R.clone', () => {
	it('happy', () => {
		const obj = { a: 1, b: 2 };
		const result = clone(obj);
		result; // $ExpectType { a: number; b: number; }
	});
});
