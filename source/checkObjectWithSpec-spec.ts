import { checkObjectWithSpec, equals } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.checkObjectWithSpec', () => {
  it('happy', () => {
    const input = {
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    }
    const conditions = {
      a: equals('foo'),
      b: equals('bar'),
    }
    const result = checkObjectWithSpec(conditions)(input)
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})
