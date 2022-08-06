import {mapKeys} from 'rambda'

const obj = {
  a: 1,
  b: 2,
}
const changeKeyFn = (prop: string) => `${prop}_foo`

interface Output {
  a_foo: string,
  b_foo: string,
}

describe('R.mapKeys', () => {
  it('happy', () => {
    const result = mapKeys<number, Output>(changeKeyFn, obj)

    result // $ExpectType Output
  })
  it('curried', () => {
    const result = mapKeys<number, Output>(changeKeyFn)(obj)

    result // $ExpectType Output
  })
})
