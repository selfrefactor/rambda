import { maxBy } from './maxBy.js';

test('happy', () => {
	expect(maxBy(Math.abs, -5, 2)).toBe(-5);
});

test('curried', () => {
	expect(maxBy(Math.abs)(2, -5)).toBe(-5);
	expect(maxBy(Math.abs)(2)(-5)).toBe(-5);
});
