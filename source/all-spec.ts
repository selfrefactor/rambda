import { all, piped } from 'rambda';

describe('all', () => {
	it('happy', () => {
		const result = piped(
			[1, 2, 3],
			all((x) => {
				x; // $ExpectType number
				return x > 0;
			}),
		);
		result; // $ExpectType boolean
	});
});
