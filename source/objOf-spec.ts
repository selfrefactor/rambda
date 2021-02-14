import {objOf} from 'rambda'

const newKey = 'foo'
const newValue = 42

describe('R.objOf', () => {
  it('happy', () => {
    const result = objOf(newKey, newValue)

    result.foo // $ExpectType number
  })
  it('curried 1', () => {
    const result = objOf(newKey)(newValue)

    result.foo // $ExpectType number
  })
})
