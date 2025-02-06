import { any } from './any.js';

const list = [1, 2, 3];

test('happy', () => {
	expect(any((x) => x < 0, list)).toBeFalse();
});

test('with curry', () => {
	expect(any((x) => x > 2)(list)).toBeTrue();
});
