import { mapObject } from 'rambda'

const obj = { a: 1, b: 2, c: 3 }

describe('R.mapObject', () => {
  it('without type transform', () => {
    const result = mapObject((x, prop, obj) => {
      x // $ExpectType number
      prop // $ExpectType string
      obj // $ExpectType Record<string, number> | undefined
      return x + 2
    }, obj)
    result // $ExpectType Record<string, number>
  })
  // it('without type transform - curried', () => {
  //   const result = mapObject<number, number, string>((x, prop, obj) => {
  //     x // $ExpectType number
  //     prop // $ExpectType string
  //     obj // $ExpectType Record<string, number> | undefined
  //     return x + 2
  //   })(obj)
  //   result // $ExpectType Record<string, number>
  // })
  it('change of type', () => {
    const result = mapObject((x, prop, obj) => {
      x // $ExpectType number
      prop // $ExpectType string
      obj // $ExpectType Record<string, number> | undefined
      return String(x + 2)
    }, obj)
    result // $ExpectType Record<string, string>
  })
  // it('change of type - curried', () => {
  //   const result = mapObject<number, string, string>((x, prop, obj) => {
  //     x // $ExpectType number
  //     prop // $ExpectType string
  //     obj // $ExpectType Record<string, number> | undefined
  //     return String(x + 2)
  //   })(obj)
  //   result // $ExpectType Record<string, string>
  // })
})
