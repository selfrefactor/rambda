import { defaultTo } from './defaultTo.js';

test('with undefined', () => {
	expect(defaultTo('foo')(undefined)).toBe('foo');
});

test('with null', () => {
	expect(defaultTo('foo')(null)).toBe('foo');
});

test('with NaN', () => {
	expect(defaultTo('foo')(Number.NaN)).toBe('foo');
});

test('with empty string', () => {
	expect(defaultTo('foo', '')).toBe('');
});

test('with false', () => {
	expect(defaultTo('foo', false)).toBeFalse();
});

test('when inputArgument passes initial check', () => {
	expect(defaultTo('foo', 'bar')).toBe('bar');
});
