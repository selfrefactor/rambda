import { lastIndexOf } from 'rambda'

const list = [1, 2, 3]

describe('R.lastIndexOf', () => {
  it('happy', () => {
    const result = lastIndexOf(2)(list)
    result // $ExpectType number
  })
})
