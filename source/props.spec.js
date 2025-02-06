import { props } from './props.js';

const obj = {
	a: 1,
	b: 2,
};
const propsToPick = ['a', 'c'];

test('happy', () => {
	const result = props(propsToPick, obj);
	expect(result).toEqual([1, undefined]);
});

test('curried', () => {
	const result = props(propsToPick)(obj);
	expect(result).toEqual([1, undefined]);
});

test('wrong input', () => {
	expect(() => props(null)(obj)).toThrowErrorMatchingInlineSnapshot(
		'"propsToPick is not a list"',
	);
});
