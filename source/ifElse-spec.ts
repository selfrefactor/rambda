import { ifElse } from 'rambda';

describe('R.ifElse', () => {
	it('happy', () => {
		const condition = (x: number) => x > 5;
		const onTrue = (x: number) => `foo${x}`;
		const onFalse = (x: number) => `bar${x}`;
		const fn = ifElse(condition, onTrue, onFalse);
		fn; // $ExpectType (x: number) => string
		const result = fn(3);
		result; // $ExpectType string
	});
	it('arity of 2', () => {
		const condition = (x: number, y: string) => x + y.length > 5;
		const onTrue = (x: number, y: string) => `foo${x}-${y}`;
		const onFalse = (x: number, y: string) => `bar${x}-${y}`;
		const fn = ifElse(condition, onTrue, onFalse);
		fn; // $ExpectType (x: number, y: string) => string
		const result = fn(3, 'hello');
		result; // $ExpectType string
	});
	test('DefinitelyTyped#59291', () => {
		const getLengthIfStringElseDouble = ifElse(
			(a: string | number): a is string => true,
			(a) => a.length,
			(a) => a * 2,
		);

		getLengthIfStringElseDouble('foo'); // $ExpectType number
		getLengthIfStringElseDouble(3); // $ExpectType number
		const result = ifElse(
			(a: {
				foo?: string;
				bar: number | string;
			}): a is { foo: string; bar: string } => true,
			(a): [string, string] => [a.foo, a.bar],
			(a): [string | undefined, string | number] => [a.foo, a.bar],
		);
		result; // $ExpectType (a: { foo?: string | undefined; bar: string | number; }) => [string, string] | [string | undefined, string | number]
	});
});
