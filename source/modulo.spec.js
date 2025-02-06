import { modulo } from './modulo.js';

test('happy', () => {
	expect(modulo(17, 3)).toBe(2);
	expect(modulo(15)(6)).toBe(3);
});
