import { T } from './T.js';
import { always } from './always.js';
import { cond } from './cond.js';
import { equals } from './equals.js';

test('returns a function', () => {
	expect(typeof cond([])).toBe('function');
});

test('returns a conditional function', () => {
	const fn = cond([
		[equals(0), always('water freezes at 0°C')],
		[equals(100), always('water boils at 100°C')],
		[T, (temp) => `nothing special happens at ${temp}°C`],
	]);
	expect(fn(0)).toBe('water freezes at 0°C');
	expect(fn(50)).toBe('nothing special happens at 50°C');
	expect(fn(100)).toBe('water boils at 100°C');
});

test('no winner', () => {
	const fn = cond([
		[equals('foo'), always(1)],
		[equals('bar'), always(2)],
	]);
	expect(fn('quux')).toBeUndefined();
});

test('predicates are tested in order', () => {
	const fn = cond([
		[T, always('foo')],
		[T, always('bar')],
		[T, always('baz')],
	]);
	expect(fn()).toBe('foo');
});

test('pass all inputs', () => {
	cond([
		[
			() => true,
			(...x) => {
				expect(x).toEqual([1, 2, 3]);
			},
		],
	])(1, 2, 3);
});
