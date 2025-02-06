import { forEach } from 'rambda';

const list = [1, 2, 3];

describe('R.forEach with arrays', () => {
	it('happy', () => {
		const result = forEach((a) => {
			a; // $ExpectType number
		}, list);
		result; // $ExpectType number[]
	});
	it('curried require an explicit typing', () => {
		const result = forEach<number>((a) => {
			a; // $ExpectType number
		})(list);
		result; // $ExpectType number[]
	});
});
