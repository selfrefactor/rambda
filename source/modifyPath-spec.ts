import { modifyPath, piped } from 'rambda'

const obj = { a: { b: { c: 1 } } }

describe('R.modifyPath', () => {
  it('array path', () => {
    const result = piped(
      obj,
      modifyPath(['a', 'b', 'c'], (x: number) => String(x)),
    )
    result.a.b.c // $ExpectType string
  })
  it('string path', () => {
    const result = piped(
      obj,
      modifyPath('a.b.c', (x: number) => String(x)),
    )
    result.a.b.c // $ExpectType string
  })
})
