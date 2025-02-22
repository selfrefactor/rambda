import { mapObjIndexed } from 'rambda'

const obj = { a: 1, b: 2, c: 3 }

describe('R.mapObjIndexed', () => {
  it('without type transform', () => {
    const result = mapObjIndexed((x, prop, obj) => {
      x // $ExpectType number
      prop // $ExpectType string
      obj // $ExpectType Record<string, number> | undefined
      return x + 2
    }, obj)
    result // $ExpectType Record<string, number>
  })
  it('without type transform - curried', () => {
    const result = mapObjIndexed<number, number, string>((x, prop, obj) => {
      x // $ExpectType number
      prop // $ExpectType string
      obj // $ExpectType Record<string, number> | undefined
      return x + 2
    })(obj)
    result // $ExpectType Record<string, number>
  })
  it('change of type', () => {
    const result = mapObjIndexed((x, prop, obj) => {
      x // $ExpectType number
      prop // $ExpectType string
      obj // $ExpectType Record<string, number> | undefined
      return String(x + 2)
    }, obj)
    result // $ExpectType Record<string, string>
  })
  it('change of type - curried', () => {
    const result = mapObjIndexed<number, string, string>((x, prop, obj) => {
      x // $ExpectType number
      prop // $ExpectType string
      obj // $ExpectType Record<string, number> | undefined
      return String(x + 2)
    })(obj)
    result // $ExpectType Record<string, string>
  })
})
