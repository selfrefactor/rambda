import { complement } from 'rambda'

describe('R.complement', () => {
  it('happy', () => {
    const fn = complement((x: number) => x > 10)
    const result = fn(1)
    result // $ExpectType boolean
  })
})
