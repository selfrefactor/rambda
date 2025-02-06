import { delay } from './delay.js';
import { pipedAsync } from './pipedAsync.js';
import { tapAsync } from './tapAsync.js';

test('happy', async () => {
	const result = await tapAsync(delay, 1);
	expect(result).toBe(1);
});

test('complex', async () => {
	let marker = false;
	const fn = () => (marker = true);
	const result = await pipedAsync(
		1,
		async (x) => {
			await delay(100);

			return x + 1;
		},
		tapAsync(fn),
		(x) => x + 1,
	);
	expect(marker).toBeTrue();
	expect(result).toBe(3);
});
