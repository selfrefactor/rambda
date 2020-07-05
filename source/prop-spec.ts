import {prop} from 'rambda'

const obj = { a: 1, b: 'foo'}

describe('R.prop', () => {
  it('happy', () => {
    const result = prop('a', obj)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = prop('b')(obj)

    result // $ExpectType string
  })
})
