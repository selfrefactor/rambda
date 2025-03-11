import { pipe,reduce } from 'rambda'

it('R.reduce', () => {
	const result = pipe(
		[1,2,3],
		reduce((acc, val) => acc + val, 10)
	)
	result // $ExpectType number
})
