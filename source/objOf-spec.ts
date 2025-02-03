import {objOf, piped} from 'rambda'

const key = 'foo'
const value = 42

describe('R.objOf', () => {
  it('happy', () => {
    const result = objOf(key, value)

    result.foo // $ExpectType number

    // @ts-expect-error
    result.bar
  })
	it('inside piped', () => {
		const result = piped(
			value,
			objOf(key)
		)
		result.foo // $ExpectType number
		// @ts-expect-error
    result.bar
	})
})
