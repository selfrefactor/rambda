import {allFalse} from 'rambda'

describe('R.allFalse', ()           => {
  it('happy', () => {
    const x = allFalse(null, false, undefined, () => false)
    x // $ExpectType boolean
  })
})
