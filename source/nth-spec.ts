import { nth } from 'rambda';

const list = [1, 2, 3];

describe('R.nth', () => {
	it('happy', () => {
		const result = nth(4, list);

		result; // $ExpectType number | undefined
	});
	it('curried', () => {
		const result = nth(1)(list);

		result; // $ExpectType number | undefined
	});
});

describe('R.nth - string', () => {
	const str = 'abc';
	it('happy', () => {
		const result = nth(4, str);

		result; // $ExpectType string
	});
	it('curried', () => {
		const result = nth(1)(str);

		result; // $ExpectType string
	});
});
