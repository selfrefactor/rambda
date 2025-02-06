import { inc } from './inc.js';
import { isNil } from './isNil.js';
import { unless } from './unless.js';

test('happy', () => {
	const safeInc = unless(isNil, inc);
	expect(safeInc(null)).toBeNull();
	expect(safeInc(1)).toBe(2);
});

test('curried', () => {
	const safeIncCurried = unless(isNil)(inc);
	expect(safeIncCurried(null)).toBeNull();
});

test('with 3 inputs', () => {
	const result = unless(
		(x) => x.startsWith('/'),
		(x) => x.concat('/'),
		'/api',
	);
	expect(result).toBe('/api');
});
