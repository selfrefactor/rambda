import { juxt } from 'rambda';

describe('R.juxt', () => {
	it('happy', () => {
		const fn = juxt([Math.min, Math.max]);
		const result = fn(3, 4, 9, -3);
		result; // $ExpectType [number, number]
	});
});
