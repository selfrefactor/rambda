import { exists, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.exists', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = pipe(list, exists(predicate))
    result // $ExpectType boolean
  })
})
