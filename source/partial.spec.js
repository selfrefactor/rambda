import { partial } from './partial.js';
import { type } from './type.js';

const greet = (salutation, title, firstName, lastName) => [
	salutation,
	title,
	firstName,
	lastName,
];

test('happy', () => {
	const canPassAnyNumberOfArguments = partial(greet, 'Hello', 'Ms.');
	const fn = canPassAnyNumberOfArguments('foo');
	const sayHello = partial(greet, ['Hello']);
	const sayHelloRamda = partial(sayHello, ['Ms.']);

	expect(type(fn)).toBe('Function');

	expect(fn('bar')).toStrictEqual(['Hello', 'Ms.', 'foo', 'bar']);
	expect(sayHelloRamda('foo', 'bar')).toStrictEqual(['Hello', 'Ms.', 'foo', 'bar']);
});

test('extra arguments are ignored', () => {
	const canPassAnyNumberOfArguments = partial(greet, 'Hello', 'Ms.');
	const fn = canPassAnyNumberOfArguments('foo');

	expect(type(fn)).toBe('Function');

	expect(fn('bar', 1, 2)).toStrictEqual(['Hello', 'Ms.', 'foo', 'bar']);
});

test('when array is input', () => {
	const fooFn = (a, b, c, d) => ({
		a,
		b,
		c,
		d,
	});
	const barFn = partial(fooFn, [1, 2], []);

	expect(barFn(1, 2)).toEqual({
		a: [1, 2],
		b: [],
		c: 1,
		d: 2,
	});
});

test('ramda spec', () => {
	const sayHello = partial(greet, 'Hello');
	const sayHelloToMs = partial(sayHello, 'Ms.');

	expect(sayHelloToMs('Jane', 'Jones')).toStrictEqual([
		'Hello',
		'Ms.',
		'Jane',
		'Jones',
	]);
});
