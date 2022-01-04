import {getter, setter, reset} from 'rambda'

const KEY = 'foo'

describe('R.getter | R.setter | R.reset', () => {
  it('happy', () => {
    setter(KEY, 1)
    const result = getter<number>(KEY)
    result // $ExpectType number
    reset()
  })

  it('using lists of keys and whole object', () => {
    interface Output {
      a: number
      foo: number
    }
    setter({a: 1, b: 2, foo: 3})
    const result = getter<Output>(['a', KEY])
    result // $ExpectType Output
  })
})
