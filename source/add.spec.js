import { add } from './add.js';

test('with number', () => {
	expect(add(7)(10)).toBe(17);
});

test('string is bad input', () => {
	expect(add('foo')('bar')).toBeNaN();
});
