import { max } from './max.js';

test('with number', () => {
	expect(max(2, 1)).toBe(2);
});

test('with string', () => {
	expect(max('foo')('bar')).toBe('foo');
	expect(max('bar')('baz')).toBe('baz');
});
