import { whereEq } from 'rambda'

describe('R.whereEq', () => {
  it('happy', () => {
    const result = whereEq({ a: { b: 2 } })({ b: 2 })
    result // $ExpectType boolean
  })
})
