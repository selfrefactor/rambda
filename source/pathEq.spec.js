import { pathEq } from './pathEq.js';

test('when true', () => {
	const path = 'a.b';
	const obj = { a: { b: { c: 1 } } };
	const target = { c: 1 };

	expect(pathEq(path, target, obj)).toBeTrue();
});

test('when false', () => {
	const path = 'a.b';
	const obj = { a: { b: 1 } };
	const target = 2;

	expect(pathEq(path, target)(obj)).toBeFalse();
});

test('when wrong path', () => {
	const path = 'foo.bar';
	const obj = { a: { b: 1 } };
	const target = 2;

	expect(pathEq(path, target, obj)).toBeFalse();
});
