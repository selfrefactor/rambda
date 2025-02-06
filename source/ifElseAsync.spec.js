import { delay } from './delay.js';
import { ifElseAsync } from './ifElseAsync.js';

test('arity of 1 - condition is async', async () => {
	const condition = async (x) => {
		await delay(100);

		return x > 4;
	};
	const whenTrue = (x) => x + 1;
	const whenFalse = (x) => x + 10;
	const fn = ifElseAsync(condition, whenTrue, whenFalse);
	const result = await Promise.all([fn(5), fn(1)]);
	expect(result).toEqual([6, 11]);
});

test('arity of 1 - condition is sync', async () => {
	const condition = (x) => x > 4;
	const whenTrue = async (x) => {
		await delay(100);

		return x + 1;
	};
	const whenFalse = async (x) => {
		await delay(100);

		return x + 10;
	};
	const fn = ifElseAsync(condition, whenTrue, whenFalse);
	const result = await Promise.all([fn(5), fn(1)]);
	expect(result).toEqual([6, 11]);
});

test('arity of 1 - all inputs are async', async () => {
	const condition = async (x) => {
		await delay(100);

		return x > 4;
	};
	const whenTrue = async (x) => {
		await delay(100);

		return x + 1;
	};
	const whenFalse = async (x) => {
		await delay(100);

		return x + 10;
	};
	const fn = ifElseAsync(condition, whenTrue, whenFalse);
	const result = await Promise.all([fn(5), fn(1)]);
	expect(result).toEqual([6, 11]);
});

test('arity of 2 - condition is async', async () => {
	const condition = async (x, y) => {
		await delay(100);

		return x + y > 4;
	};
	const whenTrue = (x, y) => x + y + 1;
	const whenFalse = (x, y) => x + y + 10;
	const fn = ifElseAsync(condition, whenTrue, whenFalse);
	const result = await Promise.all([fn(14, 20), fn(1, 3)]);
	expect(result).toEqual([35, 14]);
});

test('arity of 2 - condition is sync', async () => {
	const condition = (x, y) => x + y > 4;
	const whenTrue = async (x, y) => {
		await delay(100);

		return x + y + 1;
	};
	const whenFalse = async (x, y) => {
		await delay(100);

		return x + y + 10;
	};
	const fn = ifElseAsync(condition, whenTrue, whenFalse);
	const result = await Promise.all([fn(14, 20), fn(1, 3)]);
	expect(result).toEqual([35, 14]);
});

test('arity of 2 - all inputs are async', async () => {
	const condition = async (x, y) => {
		await delay(100);

		return x + y > 4;
	};
	const whenTrue = async (x, y) => {
		await delay(100);

		return x + y + 1;
	};
	const whenFalse = async (x, y) => {
		await delay(100);

		return x + y + 10;
	};
	const fn = ifElseAsync(condition, whenTrue, whenFalse);
	const result = await Promise.all([fn(14, 20), fn(1, 3)]);
	expect(result).toEqual([35, 14]);
});
