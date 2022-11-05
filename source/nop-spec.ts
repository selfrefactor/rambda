import {nop} from 'rambda'

describe('R.nop', () => {
  it('call', () => {
    const result = nop()
    result // $ExpectType void
  })
})
