import { insertAll } from './insertAll';

it('inserts a list of elements into the given list', () => {
	const list = ['a', 'b', 'c', 'd', 'e'];
	expect(insertAll(2, ['x', 'y', 'z'], list)).toEqual([
		'a',
		'b',
		'x',
		'y',
		'z',
		'c',
		'd',
		'e',
	]);
});

it('appends to the end of the list if the index is too large', () => {
	const list = ['a', 'b', 'c', 'd', 'e'];
	expect(insertAll(8, ['p', 'q', 'r'], list)).toEqual([
		'a',
		'b',
		'c',
		'd',
		'e',
		'p',
		'q',
		'r',
	]);
});
