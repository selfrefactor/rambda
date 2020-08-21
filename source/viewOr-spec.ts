import {viewOr, lensProp} from 'rambda'

const lens = lensProp('b')
const input = {a: 1}
interface Input {
  a: number,
}

describe('R.viewOr', () => {
  it('require explicit types', () => {
    const result = viewOr<Input, number>(4, lens, input)

    result // $ExpectType number
  })
  it('curry 1', () => {
    const result = viewOr<Input, number>(4, lens)(input)

    result // $ExpectType number
  })
  it('curry 2', () => {
    const result = viewOr<Input, number>(4)(lens, input)

    result // $ExpectType number
  })
  it('curry 3', () => {
    const result = viewOr<Input, number>(4)(lens)(input)

    result // $ExpectType number
  })
})
