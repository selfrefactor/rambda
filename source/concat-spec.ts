import { concat, pipe } from 'rambda'

const list1 = [1, 2, 3]
const list2 = [4, 5, 6]

it('R.concat', () => {
	let result = pipe(
		list1,
		concat(list2)
	)
result // $ExpectType number[]
	let resultString = pipe(
		'foo',
		concat('list2')
	)
	resultString // $ExpectType string
})
