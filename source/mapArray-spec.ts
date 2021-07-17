import {mapArray} from 'rambda'
const list =[1, 2, 3] 

describe('R.mapArray without transform', () => {
  it('happy', () => {
    const result = mapArray((x) => {
      x // $ExpectType number
      return x+1
    }, list)
    result // $ExpectType number[]
  })
  it('curried required explicit type', () => {
    const result = mapArray<number>((x) => {
      x // $ExpectType number
      return x+1
    })(list)
    result // $ExpectType number[]
  })
})

describe('R.mapArray with transform', () => {
  it('happy', () => {
    const result = mapArray((x) => {
      x // $ExpectType number
      return String(x+1)
    }, list)
    result // $ExpectType string[]
  })
  it('curried required explicit types', () => {
    const result = mapArray<number, string>((x) => {
      x // $ExpectType number
      return String(x+1)
    })(list)
    result // $ExpectType string[]
  })
})
