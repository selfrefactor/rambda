import { remove } from 'rambda';

const text = 'foo bar baz foo';

describe('R.remove', () => {
	it('with array of patterns', () => {
		const inputs = [/foo/, /not\shere/, /also/, 'bar'];

		const result = remove(inputs, text);
		const curriedResult = remove(inputs)(text);

		result; // $ExpectType string
		curriedResult; // $ExpectType string
	});
	it('with single pattern - string', () => {
		const result = remove('foo', text);
		const curriedResult = remove('foo')(text);

		result; // $ExpectType string
		curriedResult; // $ExpectType string
	});

	it('with single pattern - regular expression', () => {
		const result = remove('foo', text);
		const curriedResult = remove(/foo/g)(text);

		result; // $ExpectType string
		curriedResult; // $ExpectType string
	});
});
