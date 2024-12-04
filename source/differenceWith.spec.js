import { differenceWith } from './differenceWith.js';

const fn = (a, b) => a.x === b.x;

test('same length of list', () => {
	const result = differenceWith(fn, [{ x: 1 }, { x: 2 }], [{ x: 1 }, { x: 3 }]);
	expect(result).toEqual([{ x: 2 }]);
});

test('different length of list', () => {
	const foo = [{ x: 1 }, { x: 2 }, { x: 3 }];
	const bar = [{ x: 3 }, { x: 4 }];
	const result = differenceWith(fn, foo, bar);
	expect(result).toEqual([{ x: 1 }, { x: 2 }]);
});
