import {lensEq, lensIndex, lensPath} from 'rambda'

// curried
describe('R.lensEq', () => {
  it('with list', () => {
    const list = [ 1, 2, 3 ]
    const lens = lensIndex(0)
    const result = lensEq<number>(
      lens, 1, list
    )
    result // $ExpectType boolean
  })
  it('with object', () => {
    const input = { a : { b : { c : 1 } } }
    const target = { c : 1 }
    const lens = lensPath('a.b')
    const result = lensEq(
      lens, target, input
    )
    result // $ExpectType boolean
  })
})
