import {objOf} from 'rambda'

const key = 'foo'
const value = 42

describe('R.objOf', () => {
  it('happy', () => {
    const result = objOf(key, value)

    result.foo // $ExpectType number
    
    // $ExpectError
    result.bar // `bar` is no property of `result`; TODO - use it more often
  })
  it('curried', () => {
    const result = objOf(key)(value)

    result.foo // $ExpectType number
  })
})
