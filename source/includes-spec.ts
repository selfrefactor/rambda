import { includes, pipe } from 'rambda'

describe('R.includes', () => {
  it('happy', () => {
    const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
    const result = pipe(list, includes({ a: { b: '1' } }))
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = pipe('foo', includes('bar'))
    result // $ExpectType boolean
  })
})
