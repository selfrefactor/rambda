import { swap } from './swap';
const list = ['a', 'b', 'c', 'd', 'e', 'f'];

it('swaps an element from one index to the other', () => {
	expect(swap(0, 1, list)).toEqual(['b', 'a', 'c', 'd', 'e', 'f']);
	expect(swap(2, 1, list)).toEqual(['a', 'c', 'b', 'd', 'e', 'f']);
	expect(swap(-1, 0, list)).toEqual(['f', 'b', 'c', 'd', 'e', 'a']);
	expect(swap(4, 1, list)).toEqual(['a', 'e', 'c', 'd', 'b', 'f']);
});

it('does nothing when indexes are outside the list boundaries', () => {
	expect(swap(-20, 2, list)).toEqual(list);
	expect(swap(20, 2, list)).toEqual(list);
	expect(swap(2, 20, list)).toEqual(list);
	expect(swap(2, -20, list)).toEqual(list);
	expect(swap(20, 20, list)).toEqual(list);
	expect(swap(-20, -20, list)).toEqual(list);
});

it('does nothing when indexes are equal', () => {
	expect(swap(0, 0, list)).toEqual(list);
});

it('should be the same when swapping index order', () => {
	expect(swap(0, 1, list)).toEqual(swap(1, 0, list));
});

it('swaps property values from one property to another', () => {
	expect(swap('a', 'b', { a: 1, b: 2 })).toEqual({ a: 2, b: 1 });
	expect(swap('b', 'a', { a: 1, b: 2 })).toEqual({ a: 2, b: 1 });
});

it('does nothing when property names are not defined', () => {
	expect(swap('a', 'b', { a: 1 })).toEqual({ a: 1 });
	expect(swap('a', 'b', { b: 2 })).toEqual({ b: 2 });
});

it('swaps characters in string from one index to another', () => {
	expect(swap(0, 2, 'foo')).toEqual('oof');
});
