import {chain} from 'rambda'

const list = [1, 2, 3]
const fn = (x: number) => [`${x}`, `${x}`]

describe('R.chain', () => {
  it('without passing type', () => {
    const result = chain(fn, list)
    result // $ExpectType string[]
    const resultCurried = chain(fn)(list)
    resultCurried // $ExpectType string[]
  })
})
