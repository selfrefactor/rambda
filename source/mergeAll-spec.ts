import {mergeAll} from 'rambda'

describe('R.mergeAll', () => {
  it('with passing type', () => {
    interface Output {
      foo: number
      bar: number
    }
    const result = mergeAll<Output>([{foo: 1}, {bar: 2}])
    result.foo // $ExpectType number
    result.bar // $ExpectType number
  })

  it('without passing type', () => {
    const result = mergeAll([{foo: 1}, {bar: 2}])
    result // $ExpectType unknown
  })
})
