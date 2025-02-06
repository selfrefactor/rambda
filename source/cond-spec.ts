import { always, cond, equals } from 'rambda';

describe('R.cond', () => {
	it('happy', () => {
		const fn = cond<number[], string>([
			[equals(0), always('water freezes at 0°C')],
			[equals(100), always('water boils at 100°C')],
			[
				() => true,
				(temp) => {
					temp; // $ExpectType number
					return `nothing special happens at ${temp}°C`;
				},
			],
		]);

		const result = fn(0);
		result; // $ExpectType string
	});
});
