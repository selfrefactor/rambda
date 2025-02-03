import { add, identity, modify, toUpper } from 'rambda';

type Obj = {
	foo: string;
	bar: number;
};

describe('R.modify', () => {
	it('ramda tests', () => {
		const result1 = modify('foo', toUpper, {} as Obj);
		result1; // $ExpectType Obj

		const result2 = modify('bar', add(1), {} as Obj);
		result2; // $ExpectType Obj

		const result3 = modify('foo', identity, {} as Obj);
		result3; // $ExpectType Obj

		modify('bar', toUpper, {} as Obj);
		// @ts-expect-error
		modify('foo', add(1), {} as Obj);
	});
});
