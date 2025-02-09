import { anyFalse } from 'rambda'

describe('R.anyFalse', () => {
  it('happy', () => {
    const result = anyFalse(null, false, undefined, () => false)
    result // $ExpectType boolean
  })
})
