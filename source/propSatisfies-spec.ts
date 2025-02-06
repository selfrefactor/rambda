import { propSatisfies } from 'rambda';

const obj = { a: 1 };

describe('R.propSatisfies', () => {
	it('happy', () => {
		const result = propSatisfies((x) => x > 0, 'a', obj);

		result; // $ExpectType boolean
	});
	it('curried requires explicit type', () => {
		const result = propSatisfies<number>((x) => x > 0, 'a')(obj);

		result; // $ExpectType boolean
	});
});
