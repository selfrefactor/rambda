import { flip, subtract } from 'rambda';
import * as R from 'ramda';

describe('R.flip', () => {
	it('function with arity of 2', () => {
		const subtractFlipped = flip(subtract);
		const result = subtractFlipped(1, 7);
		const curriedResult = subtractFlipped(1)(7);
		curriedResult; // $ExpectType number

		// This is wrong
		// ============================================
		result; // $ExpectType (y: number) => number
	});
});

describe('Ramda.flip', () => {
	it('function with arity of 2', () => {
		const subtractFlipped = R.flip(R.subtract);
		const result = subtractFlipped(1, 7);
		const curriedResult = subtractFlipped(1)(7);
		result; // $ExpectType number
		curriedResult; // $ExpectType number
	});
});
