import { insert } from './insert';

describe('insert', () => {
	it('inserts an element into the given list', () => {
		const list = ['a', 'b', 'c', 'd', 'e'];
		expect(insert(2, 'x', list)).toEqual(['a', 'b', 'x', 'c', 'd', 'e']);
	});

	it('inserts another list as an element', () => {
		const list = ['a', 'b', 'c', 'd', 'e'];
		expect(insert(2, ['s', 't'], list)).toEqual([
			'a',
			'b',
			['s', 't'],
			'c',
			'd',
			'e',
		]);
	});

	it('appends to the end of the list if the index is too large', () => {
		const list = ['a', 'b', 'c', 'd', 'e'];
		expect(insert(8, 'z', list)).toEqual(['a', 'b', 'c', 'd', 'e', 'z']);
	});
});
