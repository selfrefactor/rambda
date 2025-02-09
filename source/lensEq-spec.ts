import { lensEq, lensIndex, lensPath } from 'rambda'

describe('R.lensEq', () => {
  it('with list', () => {
    const list = ['foo', 'bar', 'baz']
    const lens = lensIndex(0)
    const result = lensEq(lens, 1, list)
    result // $ExpectType boolean

    const curriedResult = lensEq(lens, 1)(list)
    curriedResult // $ExpectType boolean
  })
  it('with object', () => {
    const input = { a: { b: { c: 1 } } }
    const target = { c: 1 }
    const lens = lensPath('a.b')
    const result = lensEq(lens, target, input)
    result // $ExpectType boolean

    const curriedResult = lensEq(lens, target)(input)
    curriedResult // $ExpectType boolean
  })
})
