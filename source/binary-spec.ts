import { binary } from 'rambda';

describe('R.binary', () => {
	it('happy', () => {
		const result = binary((x: number, y: number, z) => {
			expect(arguments.length).toBe(2);
			expect(z).toBeUndefined();
			expect(x).toBe(10);
			expect(y).toBe(20);
			return x + y;
		})(10, 20, 30);
		result; // $ExpectType number
	});
});
