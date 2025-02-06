import { modifyPath, piped } from 'rambda';

const obj = { a: { b: { c: 1 } } };

describe('R.modifyPath', () => {
	it('happy', () => {
		const result = modifyPath(['a', 'b', 'c'], (x: number) => String(x), obj);
		result.a.b.c; // $ExpectType string
	});
	it('inside piped - require explicit return type', () => {
		interface Output {
			a: {
				b: {
					c: string;
				};
			};
		}

		const result = piped(
			obj,
			modifyPath<Output>(['a', 'b', 'c'], (x) => String(x)),
		);
		result.a.b.c; // $ExpectType string
	});
	it('inside piped - without explicit return type', () => {
		const result = piped(
			obj,
			modifyPath(['a', 'b', 'c'], (x) => String(x)),
		);
		result; // $ExpectType object
	});
});
