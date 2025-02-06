import { product } from './product.js';

test('happy', () => {
	expect(product([2, 3, 4])).toBe(24);
});

test('bad input', () => {
	expect(product([null])).toBe(0);
	expect(product([])).toBe(1);
});
