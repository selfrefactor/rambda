import {mapObject} from 'rambda'

describe('R.map', () => {
  it('happy', () => {
    const result = mapObject((a, b) => {
      a // $ExpectType number
      b // $ExpectType string
      return a+1
    }, {a: 1, b: 2})
    result // $ExpectType Dictionary<number>
  })
  it('curried', () => {
    const result = mapObject((a: number, b) => {
      a // $ExpectType number
      b // $ExpectType string
      return a+1
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<number>
  })
})
