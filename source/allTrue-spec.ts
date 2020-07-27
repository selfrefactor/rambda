import {allTrue} from 'rambda'

describe('R.allTrue', () => {
  it('happy', () => {
    const x = allTrue('foo', [1], undefined, () => false)
    x // $ExpectType boolean
  })
})
