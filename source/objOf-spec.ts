import {objOf} from 'rambda'

const key = 'foo'
const value = 42

describe('R.objOf', () => {
  it('happy', () => {
    const result = objOf(key, value)

    result.foo // $ExpectType number

    // @ts-expect-error
    result.bar
  })
  it('curried', () => {
    const result = objOf(key)(value)

    result.foo // $ExpectType number
  })
})
