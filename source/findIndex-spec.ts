import { findIndex, pipe } from 'rambda'

const list = [1, 2, 3]

it('R.findIndex', () => {
	let result = pipe(
		list,
		findIndex(x => x > 2)
	)
	result // $ExpectType number
})
