import { map, piped, prop } from 'rambda'

describe('R.prop', () => {
  it('happy', () => {
    const result = piped({ a: 1 }, prop('a'))

    result // $ExpectType number
  })
  it('alike R.pluck', () => {
    const result = piped([{ a: 1 }, { a: 2 }], map(prop('a')))

    result // $ExpectType boolean
  })
})
