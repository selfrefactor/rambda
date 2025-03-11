import { objOf, pipe } from 'rambda'

const key = 'foo'
const value = 42

describe('R.objOf', () => {
  it('happy', () => {
    const result = objOf(key)(value)

    result.foo // $ExpectType number

    // @ts-expect-error
    result.bar
  })
  it('inside pipe', () => {
    const result = pipe(value, objOf(key))
    result.foo // $ExpectType number
    // @ts-expect-error
    result.bar
  })
})
