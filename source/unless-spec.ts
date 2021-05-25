import {unless, inc} from 'rambda'

describe('R.unless', () => {
  it('happy', () => {
    const safeInc = unless(x => x > 5, inc)
    const result = safeInc(1)
    result // $ExpectType number
  })
})
