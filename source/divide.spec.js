import { divide } from './divide.js';

test('happy', () => {
	expect(divide(71, 100)).toBe(0.71);
	expect(divide(71)(100)).toBe(0.71);
});
