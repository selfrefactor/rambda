import { add, identity, map, modify, pipe, toUpper } from 'rambda';

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

		const result3 = modify('foo', toUpper)({} as Obj);
		result3; // $ExpectType Obj

		const result4 = modify('bar', add(1))({} as Obj);
		result4; // $ExpectType Obj

		const result5 = modify('foo')(toUpper)({} as Obj);
		result5; // $ExpectType Obj

		const result6 = modify('bar')(add(1))({} as Obj);
		result6; // $ExpectType Obj

		const result7 = modify('foo')(toUpper, {} as Obj);
		result7; // $ExpectType Obj

		const result8 = modify('bar')(add(1), {} as Obj);
		result8; // $ExpectType Obj

		const result9 = modify('foo', identity, {} as Obj);
		result9; // $ExpectType Obj

		// @ts-expect-error
		modify('foo', add(1), {} as Obj);
		// @ts-expect-error
		modify('bar', toUpper, {} as Obj);

		const f = pipe(map<Obj, Obj>(modify('foo', toUpper)));

		f([] as Obj[]); // $ExpectType Obj[]
	});
});
