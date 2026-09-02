import { modifyPath } from './modifyPath'
import { pipe } from './pipe'

const obj = { a: { b: { c: 1 } } }

test('happy', () => {
  const result = pipe(obj, modifyPath(['a', 'b', 'c'], (x: number) => String(x)))
  expectTypeOf(result.a.b.c).toEqualTypeOf<string>()
  expect(result).toEqual({ a: { b: { c: '1' } } })
})
