import { toDecimal } from 'rambda'

describe('R.toDecimal', () => {
  it('happy', () => {
    const result = toDecimal(12.4343)
    result // $ExpectType number
  })
  it('with optional argument', () => {
    const result = toDecimal(12.4343, 1)
    result // $ExpectType number
  })
})
