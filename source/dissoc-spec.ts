import {dissoc} from 'rambda'

interface Input {
  a: string,
  b: string,
}
const obj: Input = {
  a: 'foo',
  b: 'bar',
}

describe('R.dissoc', () => {
  it('happy', () => {
    const result = dissoc('b', obj)

    result.a // $ExpectType string

    // $ExpectError
    result.b
  })
  it('curried', () => {
    const result = dissoc('b')(obj)

    result.a // $ExpectType string
  })
})
