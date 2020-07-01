import {ifElse} from 'ramda'

describe('R.ifElse', () => {
  it('happy', () => {
    const fn = ifElse(
      x => x > 2,
      () => 10,
      () => 1,
    )
     const result = fn(3) 
    result // $ExpectType any
  })
})
