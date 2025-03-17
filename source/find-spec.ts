import { find, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.find', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = pipe(list, find(predicate))
    result // $ExpectType number | undefined
  })
})
