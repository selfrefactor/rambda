import { delay } from './delay.js';
import { waitFor } from './waitFor.js';

const howLong = 1000;

test('true', async () => {
	let counter = 0;
	const condition = (x) => {
		counter++;

		return counter > x;
	};

	const result = await waitFor(condition, howLong)(6);
	expect(result).toBeTrue();
});

test('false', async () => {
	let counter = 0;
	const condition = (x) => {
		counter++;

		return counter > x;
	};

	const result = await waitFor(condition, howLong)(12);
	expect(result).toBeFalse();
});

test('async condition | true', async () => {
	let counter = 0;
	const condition = async (x) => {
		counter++;
		await delay(10);

		return counter > x;
	};

	const result = await waitFor(condition, howLong)(6);
	expect(result).toBeTrue();
});

test('async condition | false', async () => {
	let counter = 0;
	const condition = async (x) => {
		counter++;
		await delay(10);

		return counter > x;
	};

	const result = await waitFor(condition, howLong)(12);
	expect(result).toBeFalse();
});

test('throws when fn is not function', () => {
	const fn = 'foo';

	expect(() => waitFor(fn, howLong)()).toThrowErrorMatchingInlineSnapshot(
		'"R.waitFor"',
	);
});
