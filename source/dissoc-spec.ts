import {dissoc} from 'rambda'

const obj = {
  a : 1,
  b : 2,
}
interface Output {
  a: string
}

describe('R.dissoc', () => {
  it('happy', () => {
    const result = dissoc<Output>('b',obj)

    result // $ExpectType Output
  })
  it('curried', () => {
    const result = dissoc<Output>('b')(obj)

    result // $ExpectType Output
  })
})
