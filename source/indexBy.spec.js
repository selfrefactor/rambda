import { indexBy } from './indexBy.js'

test('happy', () => {
	const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}]

	expect(
		indexBy('id')(list)
	).toEqual(
		{abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
	)
})