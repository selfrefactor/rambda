import {chain} from 'rambda'

const list = [ 1, 2, 3 ]
const duplicate = (n: number) => [ n, n ]

describe('chain', () => {
  it('without passing type', () => {
    const result = chain(duplicate, list)
    result // $ExpectType number[]
  })

  it('passing types', () => {
    const duplicateAndModify = (x: number) => [
      `||${x}||`,
      `||${x}||`
    ]
    const result = chain<number, string>(duplicateAndModify, list)
    const resultCurried = chain<number, string>(duplicateAndModify)(list)
    result // $ExpectType string[]
    resultCurried // $ExpectType string[]
  })
})
