import { modifyPath, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

const obj = { a: { b: { c: 1 } } }

describe('R.modifyPath', () => {
  it('array path', () => {
    const result = pipe(
      obj,
      modifyPath(['a', 'b', 'c'], (x: number) => String(x)),
    )
    expectTypeOf(result.a.b.c).toEqualTypeOf<string>()
  })
  it('string path', () => {
    const result = pipe(
      obj,
      modifyPath('a.b.c', (x: number) => String(x)),
    )
    expectTypeOf(result.a.b.c).toEqualTypeOf<string>()
  })
})
