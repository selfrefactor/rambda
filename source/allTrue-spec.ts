import {allTrue} from 'rambda'

describe('R.allTrue', () => {
  it('happy', () => {
    const result = allTrue('foo', [1], undefined, () => false)
    result // $ExpectType boolean
  })
})
