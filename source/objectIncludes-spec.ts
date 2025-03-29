import { objectIncludes, pipe } from 'rambda'

describe('R.objectIncludes', () => {
  it('happy', () => {
    const result = pipe({ a: 1, b: 2, c: { d: 3 } }, objectIncludes({ a: 2 }))
    result // $ExpectType boolean
  })
  it('nested', () => {
    const result = pipe({ a: 1, b: 2, c: { d: 3 } }, objectIncludes({ c: { d: 3 } }))
    result // $ExpectType boolean
  })
})
