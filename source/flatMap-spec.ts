import { flatMap } from 'rambda'

const list = [1, 2, 3]
const fn = (x: number) => [`${x}`, `${x}`]

describe('R.flatMap', () => {
  it('without passing type', () => {
    const curriedResult = flatMap(fn)(list)
    curriedResult // $ExpectType string[]
  })
})
