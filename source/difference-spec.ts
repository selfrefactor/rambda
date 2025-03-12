import { difference, pipe } from 'rambda'

const list1 = [1, 2, 3]
const list2 = [1, 2, 4]

it('R.difference', () => {
    const result = pipe(
			list1,
			difference(list2)
		)

    result // $ExpectType number[]
})
