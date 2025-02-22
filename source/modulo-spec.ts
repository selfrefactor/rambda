import { modulo } from 'rambda'

describe('R.modulo', () => {
  it('happy', () => {
    const result = modulo(4, 1)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = modulo(4)(1)

    result // $ExpectType number
  })
})
