import { lensIndex, lensPath, lensSatisfies } from 'rambda'

describe('R.lensSatisfies', () => {
  it('with list', () => {
    const list = [1, 2, 3]
    const lens = lensIndex<number>(0)
    const predicate = (x: number) => x > 2
    const result = lensSatisfies(predicate, lens, list)
    result // $ExpectType boolean

    const curriedResult = lensSatisfies(predicate, lens)(list)
    curriedResult // $ExpectType boolean
  })
  it('with object', () => {
    const input = { a: { b: { c: 1 } } }
    const lens = lensPath('a.b.c')
    const predicate = (x: number) => x > 1
    const result = lensSatisfies(predicate, lens, input)
    result // $ExpectType boolean

    const curriedResult = lensSatisfies(predicate, lens)(input)
    curriedResult // $ExpectType boolean
  })
})
