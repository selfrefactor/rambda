import { piped, propSatisfies } from 'rambda'

const obj = { a: 1 }

describe('R.propSatisfies', () => {
  it('happy', () => {
    const result = piped(
			obj,
			propSatisfies(x => {
				x // $ExpectType number
				return x > 0
			}, 'a')
		)

    result // $ExpectType boolean
  })
})
