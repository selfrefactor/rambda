import { both } from './both.js';

const firstFn = (val) => val > 0;
const secondFn = (val) => val < 10;

test('with curry', () => {
	expect(both(firstFn)(secondFn)(17)).toBeFalse();
});

test('without curry', () => {
	expect(both(firstFn, secondFn)(7)).toBeTrue();
});

test('with multiple inputs', () => {
	const between = (a, b, c) => a < b && b < c;
	const total20 = (a, b, c) => a + b + c === 20;
	const fn = both(between, total20);
	expect(fn(5, 7, 8)).toBeTrue();
});

test('skip evaluation of the second expression', () => {
	let effect = 'not evaluated';
	const F = () => false;
	const Z = () => {
		effect = 'Z got evaluated';
	};
	both(F, Z)();

	expect(effect).toBe('not evaluated');
});
