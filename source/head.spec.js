import { head } from './head.js';

test('head', () => {
	expect(head(['fi', 'fo', 'fum'])).toBe('fi');
	expect(head([])).toBeUndefined();
	expect(head('foo')).toBe('f');
	expect(head('')).toBe('');
});
