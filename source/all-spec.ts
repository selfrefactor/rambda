import {all} from 'rambda'

describe('all', () => {
  it('happy', () => {
    const result = all(x => {
      x // $ExpectType number
      return x > 0
    }, [1, 2, 3])
    result // $ExpectType boolean
  })
  it('pass index', () => {
    const result = all((x, i) => {
      x // $ExpectType number
      i // $ExpectType number
      return x > 0
    }, [1, 2, 3])
    result // $ExpectType boolean
  })
  it('pass index + curry', () => {
    const result = all<number>((x, i) => {
      x // $ExpectType number
      i // $ExpectType number
      return x > 0
    })([1, 2, 3])
    result // $ExpectType boolean
  })
  it('curried needs a type', () => {
    const result = all<number>(x => {
      x // $ExpectType number
      return x > 0
    })([1, 2, 3])
    result // $ExpectType boolean
  })
})
