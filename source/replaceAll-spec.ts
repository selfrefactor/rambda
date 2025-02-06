import { replaceAll } from 'rambda';

const str = 'foo bar foo';
const replacer = 'bar';
const patterns = [/foo/g, 'bar'];

describe('R.replaceAll', () => {
	it('happy', () => {
		const result = replaceAll(patterns, replacer, str);

		result; // $ExpectType string
	});
	it('curried 1', () => {
		const result = replaceAll(patterns, replacer)(str);

		result; // $ExpectType string
	});
	it('curried 2', () => {
		const result = replaceAll(patterns)(replacer)(str);

		result; // $ExpectType string
	});
});
