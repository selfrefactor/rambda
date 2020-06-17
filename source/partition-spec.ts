import {partition} from 'rambda'

describe('partition', () => {
  it('with array', () => {
    const predicate = (x: number, i: number) => {
      return x > 2
    }
    const list = [ 1, 2, 3, 4 ]
  
    const result = partition(predicate, list)
    const curriedResult = partition(predicate)(list)
    result // $ExpectType [number[], number[]]
    curriedResult // $ExpectType [number[], number[]]
  })
  
  it('with object', () => {
    const predicate = (value:number, prop?: string) => {
  
      return value > 2
    }
    const hash = {
      a : 1,
      b : 2,
      c : 3,
      d : 4,
    }
  
    const result = partition(predicate, hash)
    const curriedResult = partition(predicate)(hash)
    result[0] // $ExpectType { [key: string]: number; }
    result[1] // $ExpectType { [key: string]: number; }
    curriedResult[0] // $ExpectType { [key: string]: number; }
    curriedResult[1] // $ExpectType { [key: string]: number; }
  })
})
 