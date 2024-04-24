import {viewOr, lensProp} from 'rambda'

const input = {a: 1, b:2}
interface Input {
  a: number,
  b: number,
}
const lens = lensProp<Input, 'b'>('b')

describe('R.viewOr - no explicit types', () => {
  it('no curried inputs', () => {
    const result = viewOr(4, lens, input)

    result // $ExpectType number
  })
  it('curried inputs', () => {
    const result = viewOr(4, lens)(input)

    result // $ExpectType number
  })
})

describe('R.viewOr - explicit types', () => {
  it('no curried inputs', () => {
    const result = viewOr<Input, number>(4, lens, input)

    result // $ExpectType number
  })
  it('curried inputs', () => {
    const result = viewOr<Input, number>(4, lens)(input)

    result // $ExpectType number
  })
})
