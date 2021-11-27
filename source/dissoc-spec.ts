import {dissoc} from 'rambda'

interface Input {
  a: string,
  b: string,
}
const obj: Input = {
  a: 'foo',
  b: 'bar',
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
})
