import { shuffle } from 'rambdax'

const list = [1, 2, 3, 4, 5]

describe('R.shuffle', () => {
  it('happy', () => {
    const result = shuffle(list)
    result // $ExpectType number[]
  })
})
