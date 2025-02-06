import { assoc, lens, lensIndex, lensPath, lensProp, over, view } from 'rambda';

interface Input {
	foo: string;
}
const testObject: Input = {
	foo: 'Jazz',
};

describe('R.lens', () => {
	it('happy', () => {
		const fn = lens<Input, string>((x: Input) => {
			x.foo; // $ExpectType string
			return x.foo;
		}, assoc('name'));
		fn; // $ExpectType Lens<Input, string>
	});
});

describe('R.lensProp', () => {
	it('happy', () => {
		const result = view<Input, string>(lensProp('foo'), testObject);
		result; // $ExpectType string
	});
	it('issue 740', () => {
		// @ts-expect-error
		over(lensProp('x'), (n) => String(n), { x: 1 });
	});
});

describe('R.lensIndex', () => {
	const testList: Input[] = [{ foo: 'bar' }, { foo: 'baz' }];
	it('happy', () => {
		const result = view<Input[], Input>(lensIndex(0), testList);
		result; // $ExpectType Input
		result.foo; // $ExpectType string
	});
});

describe('R.lensPath', () => {
	const path = lensPath(['bar', 'a']);
	it('happy', () => {
		const result = view<Input, string>(path, testObject);
		result; // $ExpectType string
	});
});

describe('R.view', () => {
	const fooLens = lens<Input, string>((x: Input) => {
		return x.foo;
	}, assoc('foo'));
	it('happt', () => {
		const result = view<Input, string>(fooLens, testObject);
		result; // $ExpectType string
	});
});
