import { countBy, pipe } from 'rambda'

const list = ['a', 'A', 'b', 'B', 'c', 'C']

it('R.countBy', () => {
	let result = pipe(
		list,
		countBy((x) => x.toLowerCase())
	)
	result.a // $ExpectType number
	result.foo // $ExpectType number
	result // $ExpectType { [index: string]: number; }
})
