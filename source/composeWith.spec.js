import { always, identity, inc, isNil, map, modulo, multiply } from 'rambdax';
import { composeWith as composeWithRamda, concat, flip, ifElse } from 'ramda';

import { composeWith } from './composeWith.js';

test('performs right-to-left function composition with function applying', () => {
	const f = composeWith((f, res) => f(res))([map, multiply, Number.parseInt]);

	expect(f).toHaveLength(2);
	expect(f('10')([1, 2, 3])).toEqual([10, 20, 30]);
	expect(f('10', 2)([1, 2, 3])).toEqual([2, 4, 6]);
});

test('performs right-to-left function while not nil result', () => {
	const isOdd = flip(modulo)(2);
	const composeWhenNotNil = composeWithRamda((f, res) =>
		isNil(res) ? null : f(res),
	);

	const f = composeWhenNotNil([
		inc,
		ifElse(isOdd, identity, always(null)),
		Number.parseInt,
	]);
	expect(f).toHaveLength(2);
	expect(f('1')).toBe(2);
	expect(f('2')).toBeNull();
});

test('performs right-to-left function using promise chaining', () => {
	const then = (f, p) => p.then(f);
	const composeP = composeWithRamda(then);
	const toListPromise = (a) =>
		new Promise((res) => {
			res([a]);
		});
	const doubleListPromise = (a) =>
		new Promise((res) => {
			res(concat(a, a));
		});
	const f = composeP([doubleListPromise, toListPromise]);

	return f(1).then((res) => {
		expect(res).toEqual([1, 1]);
	});
});
