import { DELAY, delay } from 'rambda';

describe('R.delay', () => {
	it('happy', async () => {
		const result = await delay(100);
		result; // $ExpectType "RAMBDAX_DELAY"
		DELAY; // $ExpectType "RAMBDAX_DELAY"
	});
});
