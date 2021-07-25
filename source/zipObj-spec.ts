import {zipObj} from 'rambda'

describe('R.zipObj', () => {
  it('happy', () => {
    // this is wrong since 24.10.2020 `@types/ramda` changes
    const result = zipObj(['a', 'b', 'c', 'd'], [1, 2, 3])
    result // $ExpectType { b: number; a: number; c: number; d: number; }
  })
  it('imported from @types/ramda', () => {
    const result = zipObj(['a', 'b', 'c'], [1, 2, 3])
    const curriedResult = zipObj(['a', 'b', 'c'])([1, 2, 3])
    result // $ExpectType { b: number; a: number; c: number; }
    curriedResult // $ExpectType { b: number; a: number; c: number; }
  })
})
