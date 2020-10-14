import { dropWhile } from 'rambda'

const list = [1, 2, 3, 4]

describe('R.dropWhile', () => {
  it('happy', () => {
    const result = dropWhile(x => x > 2, list)
    
    result // $ExpectType number[]
  })
  it('curried require explicit type', () => {
    const result = dropWhile<number>(x => x > 2)(list)

    result // $ExpectType number[]
  })
})