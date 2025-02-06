import { sum } from './sum.js';

test('happy', () => {
	expect(sum([1, 2, 3, 4, 5])).toBe(15);
});
