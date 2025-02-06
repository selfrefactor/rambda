import { propSatisfies } from './propSatisfies.js';

const obj = { a: 1 };

test('when true', () => {
	expect(propSatisfies((x) => x > 0, 'a', obj)).toBeTrue();
});

test('when false', () => {
	expect(propSatisfies((x) => x < 0, 'a')(obj)).toBeFalse();
});
