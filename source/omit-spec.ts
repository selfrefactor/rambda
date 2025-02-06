import { omit } from 'rambda';

describe('R.omit with array as props input', () => {
	it('allow Typescript to infer object type', () => {
		const input = { a: 'foo', b: 2, c: 3, d: 4 };
		const result = omit(['b', 'c'], input);

		result.a; // $ExpectType string
		result.d; // $ExpectType number

		const curriedResult = omit(['b', 'c'])(input);

		curriedResult.a; // $ExpectType string
		curriedResult.d; // $ExpectType number
	});
});

describe('R.omit with string as props input', () => {
	it('require explicit return type', () => {
		interface Output {
			a: string;
			d: number;
		}
		const input = { a: 'foo', b: 2, c: 3, d: 4 };
		const result = omit<Output>('b,c', input);

		result.a; // $ExpectType string
		result.d; // $ExpectType number

		const curriedResult = omit<Output>('b,c')(input);
		curriedResult.a; // $ExpectType string
		curriedResult.d; // $ExpectType number
	});
});
