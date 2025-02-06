import { mapToObject } from 'rambda';

interface Output {
	key1: string;
	key2: string;
	key3: string;
}

const list = [1, 2, 3, 12];
const fn = (x: number) => {
	if (x > 10) return false;

	return x % 2 ? { [`key${x}`]: x + 1 } : { [`key${x}`]: x + 10 };
};

describe('R.mapToObject', () => {
	it('when passing explicit types', () => {
		const result = mapToObject<number, Output>(fn, list);
		result; // $ExpectType Output
	});
	test('when not passing explicit types', () => {
		const result = mapToObject(fn, list);
		result; // $ExpectType { [x: string]: number; }
	});
	it('curried - when passing explicit types', () => {
		const result = mapToObject<number, Output>(fn)(list);
		result; // $ExpectType Output
	});
	test('curried - when not passing explicit types', () => {
		const result = mapToObject(fn)(list);
		result; // $ExpectType { [x: string]: number; }
	});
});
