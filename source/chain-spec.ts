import {chain} from 'rambda'

const list = [1, 2, 3]
const fn = (x: number) => [`${x}`, `${x}`]

describe('R.chain', () => {
  it('without passing type', () => {
    const result = chain(fn, list)
    result // $ExpectType readonly string[]

    const curriedResult = chain(fn)(list)
    curriedResult // $ExpectType readonly string[]
  })
})
