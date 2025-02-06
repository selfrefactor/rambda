import { uniqWith as uniqWithRamda } from 'ramda';

import { uniqWith } from './uniqWith.js';

const list = [{ a: 1 }, { a: 1 }];

test('happy', () => {
	const fn = (x, y) => x.a === y.a;

	const result = uniqWith(fn, list);
	expect(result).toEqual([{ a: 1 }]);
});

test('with list of strings', () => {
	const fn = (x, y) => x.length === y.length;
	const list = ['0', '11', '222', '33', '4', '55'];
	const result = uniqWith(fn)(list);
	const resultRamda = uniqWithRamda(fn, list);
	expect(result).toEqual(['0', '11', '222']);
	expect(resultRamda).toEqual(['0', '11', '222']);
});

test('should return items that are not equal to themselves', () => {
	// test case based on https://github.com/remeda/remeda/issues/999
	const data = [
		{ id: 1, reason: 'No name' },
		{ id: 1, reason: 'No name' },
		{ reason: 'No name' },
		{ reason: 'No name' },
	];
	const expectedResult = [
		{ id: 1, reason: 'No name' },
		{ reason: 'No name' },
		{ reason: 'No name' },
	];

	const result = uniqWith((errorA, errorB) => {
		// the objects with no ids should effectively be ignored from removal of duplicates
		if (errorA.id === undefined || errorB.id === undefined) {
			return false;
		}
		return errorA.id === errorB.id;
	}, data);

	expect(result).toEqual(expectedResult);
});
