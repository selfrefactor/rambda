import { apply } from './apply.js';
import { converge } from './converge.js';
import { identity } from './identity.js';
import { prop } from './prop.js';
import { sum } from './sum.js';
import { unapply } from './unapply.js';

test('happy', () => {
	const fn = unapply(identity);
	expect(fn(1, 2, 3)).toEqual([1, 2, 3]);
	expect(fn()).toEqual([]);
});

test('returns a function which is always passed one argument', () => {
	const fn = unapply(() => arguments.length);
	expect(fn('x')).toBe(1);
	expect(fn('x', 'y')).toBe(1);
	expect(fn('x', 'y', 'z')).toBe(1);
});

test('forwards arguments to decorated function as an array', () => {
	const fn = unapply((xs) => `[${xs}]`);
	expect(fn(2)).toBe('[2]');
	expect(fn(2, 4)).toBe('[2,4]');
	expect(fn(2, 4, 6)).toBe('[2,4,6]');
});

test('returns a function with length 0', () => {
	const fn = unapply(identity);
	expect(fn).toHaveLength(0);
});

test('is the inverse of R.apply', () => {
	let a;
	let b;
	let c;
	let d;
	let e;
	let f;
	let g;
	let n;
	const rand = () => Math.floor(200 * Math.random()) - 100;

	f = Math.max;
	g = unapply(apply(f));
	n = 1;
	while (n <= 100) {
		a = rand();
		b = rand();
		c = rand();
		d = rand();
		e = rand();
		expect(f(a, b, c, d, e)).toEqual(g(a, b, c, d, e));
		n += 1;
	}

	f = (xs) => `[${xs}]`;
	g = apply(unapply(f));
	n = 1;
	while (n <= 100) {
		a = rand();
		b = rand();
		c = rand();
		d = rand();
		e = rand();
		expect(f([a, b, c, d, e])).toEqual(g([a, b, c, d, e]));
		n += 1;
	}
});

test('it works with converge', () => {
	const fn = unapply(sum);
	const convergeFn = converge(fn, [prop('a'), prop('b'), prop('c')]);
	const obj = {
		a: 1337,
		b: 42,
		c: 1,
	};
	const expected = 1337 + 42 + 1;
	expect(convergeFn(obj)).toEqual(expected);
});
