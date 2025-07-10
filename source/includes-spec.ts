import { includes } from 'ramda'
import { pipe } from 'rambda'

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
  it('with array of strings', () => {
		const result = pipe(['1','2'], includes('1'))
    result // $ExpectType boolean
  })
  it('without R.pipe', () => {
    const result1 = includes('1')(['1', '2'])
    const result2 = includes(1)([1, 2])
    result1 // $ExpectType boolean
    result2 // $ExpectType boolean
  })
})
