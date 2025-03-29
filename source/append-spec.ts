import { append, pipe, prepend } from 'rambda'

const listOfNumbers = [1, 2, 3]

describe('R.append/R.prepend', () => {
  it('happy', () => {
    const result = pipe(listOfNumbers, append(4), prepend(0))
    result // $ExpectType number[]
  })
  it('with object', () => {
    const result = pipe([{ a: 1 }], append({ a: 10 }), prepend({ a: 20 }))
    result // $ExpectType { a: number; }[]
  })
})
