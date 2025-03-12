import { count, pipe } from 'rambda'

const list = [1, 2, 3]
const predicate = (x: number) => x > 1

it('R.count', () => {
    const result = pipe(
			list,
			count(predicate)
		)
    result // $ExpectType number
})
