import {dissoc, pipe, identity} from 'rambda'

const obj = {
  a: 1,
  b: 2,
}
interface Output {
  a: string,
}

describe('R.dissoc', () => {
  it('happy', () => {
    const result = dissoc<Output>('b', obj)

    result // $ExpectType Output
  })
  it('curried', () => {
    const result = dissoc<Output>('b')(obj)

    result // $ExpectType Output
  })
  it('within R.pipe', () => {
    const result = pipe<object, object, Output>(identity, dissoc('b'))(obj)

    result // $ExpectType Output
  })
})
