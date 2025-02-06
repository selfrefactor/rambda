import { juxt } from './juxt.js';

test('happy', () => {
	const fn = juxt([Math.min, Math.max, Math.min]);
	const result = fn(3, 4, 9, -3);
	expect(result).toEqual([-3, 9, -3]);
});
