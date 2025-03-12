import { findLast, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.findLast', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
		let result = pipe(
			list,
			findLast(predicate)
		)
		result // $ExpectType number | undefined
  })
})
