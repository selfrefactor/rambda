import { isType } from 'rambda'

describe('R.isType', () => {
  it('happy', () => {
    const result = isType('String', 'foo')
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = isType('RegExp')(/foo/g)
    result // $ExpectType boolean
  })
})
