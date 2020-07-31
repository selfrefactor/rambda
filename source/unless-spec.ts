import {unless, isNil, inc} from 'rambda'

describe('R.unless', () => {
  it('happy', () => {
    const safeInc = unless<any, number>(isNil, inc)
    const result = [safeInc(null), safeInc(1)]
    result[0] // $ExpectType number
    result[1] // $ExpectType number
  })

  it('it needs explicitly declared types', () => {
    const safeInc = unless(x => x > 5, inc)
    const result = safeInc(1)
    result // $ExpectType number
  })
})
