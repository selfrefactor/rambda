import { delay, wait } from 'rambda';

describe('R.wait', () => {
	it('with promise', async () => {
		const [result, err] = await wait(delay(100));
		result; // $ExpectType "RAMBDAX_DELAY"
		err; // $ExpectType Error | undefined
	});

	it('with async function', async () => {
		const fn = async (x: number) => {
			await delay(100);
			return x + 1;
		};
		const [result, err] = await wait(fn);
		result; // $ExpectType number
		err; // $ExpectType Error | undefined
	});
});
