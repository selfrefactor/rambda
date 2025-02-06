import { pickAll } from './pickAll.js';

test('when input is undefined or null', () => {
	expect(pickAll('a', null)).toBeUndefined();
	expect(pickAll('a', undefined)).toBeUndefined();
});

test('with string as condition', () => {
	const obj = {
		a: 1,
		b: 2,
		c: 3,
	};
	const result = pickAll('a,c', obj);
	const resultCurry = pickAll('a,c')(obj);
	const expectedResult = {
		a: 1,
		b: undefined,
		c: 3,
	};

	expect(result).toEqual(expectedResult);
	expect(resultCurry).toEqual(expectedResult);
});

test('with array as condition', () => {
	expect(
		pickAll(['a', 'b', 'c'], {
			a: 'foo',
			c: 'baz',
		}),
	).toEqual({
		a: 'foo',
		b: undefined,
		c: 'baz',
	});
});
