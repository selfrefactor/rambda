import { min } from './min.js';

test('happy', () => {
	expect(min(2, 1)).toBe(1);
	expect(min(1)(2)).toBe(1);
});
