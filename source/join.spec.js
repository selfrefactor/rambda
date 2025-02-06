import { join } from './join.js';

test('curry', () => {
	expect(join('|')(['foo', 'bar', 'baz'])).toBe('foo|bar|baz');

	expect(join('|', [1, 2, 3])).toBe('1|2|3');

	const spacer = join(' ');

	expect(spacer(['a', 2, 3.4])).toBe('a 2 3.4');
});
