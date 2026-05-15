import { excludes, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.excludes', () => {
  it('happy', () => {
    const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
    const result = pipe({ a: { b: '1' } }, excludes(list))
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
  it('with string', () => {
    const result = pipe('foo', excludes('bar'))
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})
