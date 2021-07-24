import {mapObject} from 'rambda'

describe('R.mapObject', () => {
  it('iterable with all three arguments', () => {
    const result = mapObject(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Dictionary<number>
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
  it('iterable with property argument', () => {
    const result = mapObject(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return a + 2
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<number>
  })
  it('iterable with no property argument', () => {
    const result = mapObject(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
  it('curried requires explicit type', () => {
    const result = mapObject<number>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return a + 2
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<number>
  })
  it('curried requires explicit types', () => {
    const result = mapObject<number, string>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<string>
  })
})
