import { pipe, zipWith } from 'rambda'

const list1 = [1, 2]
const list2 = [10, 20, 30]

describe('R.zipWith', () => {
  it('happy', () => {
    const result = pipe(
			list2,
			zipWith((x, y) => {
				x // $ExpectType number
				y // $ExpectType number
				return `${x}-${y}`
			}, list1)
		)
		
    result // $ExpectType string[]
  })
})
