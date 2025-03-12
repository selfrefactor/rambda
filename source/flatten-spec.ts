import { flatten, pipe } from 'rambda'

describe('flatten', () => {
  it('happy', () => {
    const result = pipe(
			[1, 2, [3, [4]]],
			flatten<number>
		)
    result // $ExpectType number[]
  })
})
