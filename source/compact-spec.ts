import {compact} from 'rambda'

const list = ['', 2, 3]

describe('R.compact', () => {
  it('happy', () => {
    const result = compact(list)
    result // $ExpectType unknown[]
  })

  it('passing type', () => {
    const result = compact<number>(list)
    result // $ExpectType number[]
  })
})
