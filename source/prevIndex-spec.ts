import { prevIndex } from 'rambda'

const list = [1, 2, 3]

describe('R.prevIndex', () => {
  it('happy', () => {
    const result = prevIndex(4, list)

    result // $ExpectType number
  })
})
