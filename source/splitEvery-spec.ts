import { piped, splitEvery } from 'rambda'

const list = [1, 2, 3, 4, 5, 6, 7]

describe('R.splitEvery', () => {
  it('happy', () => {
		let result = piped(
			list,
			splitEvery(3)
		)
    result // $ExpectType number[][]
  })
})
