import {allFalse} from 'rambda'

describe('allFalse', () => {
  it('happy', () => {
    const x = allFalse(null, false, undefined, () => false)
    x // $ExpectType boolean
  })
})
