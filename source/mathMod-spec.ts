import { mathMod } from 'rambda';

const first = 1;
const second = 2;

describe('R.mathMod', () => {
	it('happy', () => {
		const result = mathMod(first, second);
		result; // $ExpectType number
	});
	it('curried', () => {
		const result = mathMod(first, second);
		result; // $ExpectType number
	});
});
