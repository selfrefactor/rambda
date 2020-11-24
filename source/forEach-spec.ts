import {forEach} from 'rambda'

const list = [1, 2, 3]
const obj = {a: 1, b: 2}

describe('R.forEach with arrays', () => {
  it('happy', () => {
    const result = forEach(a => {
      a // $ExpectType number
    }, list)
    result // $ExpectType readonly number[]
  })
  it('curried require an explicit typing', () => {
    const result = forEach<number>(a => {
      a // $ExpectType number
    })(list)
    result // $ExpectType readonly number[]
  })
})

describe('R.forEach with objects', () => {
  it('happy', () => {
    const result = forEach((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    }, obj)
    result // $ExpectType Dictionary<number>
  })
  it('curried require an input typing and a dummy third typing', () => {
    // Required in order all typings to work
    const result = forEach<number, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
    })(obj)
    result // $ExpectType Dictionary<number>
  })
  it('iterator without property', () => {
    const result = forEach(a => {
      a // $ExpectType number
    }, obj)
    result // $ExpectType Dictionary<number>
  })
})
