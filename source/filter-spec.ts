import {filter} from 'rambda'

const list = [1, 2, 3]
const obj = {a: 1, b: 2}

describe('R.filter with array', () => {
  it('happy', () => {
    const result = filter<number>(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = filter<number>(x => {
      x // $ExpectType number
      return x > 1
    })(list)
    result // $ExpectType readonly number[]
  })
})

describe('R.filter with objects', () => {
  it('happy', () => {
    const result = filter<number>((val, prop, origin) => {
      val // $ExpectType number
      prop // $ExpectType string
      origin // $ExpectType Dictionary<number>

      return val > 1
    }, obj)
    result // $ExpectType Dictionary<number>
  })
  it('curried version requires second dummy type', () => {
    const result = filter<number, any>((val, prop, origin) => {
      val // $ExpectType number
      prop // $ExpectType string
      origin // $ExpectType Dictionary<number>

      return val > 1
    })(obj)
    result // $ExpectType Dictionary<number>
  })
})
