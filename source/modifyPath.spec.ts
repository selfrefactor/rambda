import { modifyPath } from './modifyPath'
import { pipe } from './pipe'

const obj = { a: { b: { c: 1 } } }

test('happy', () => {
  const result = modifyPath('a.b.c', (x: number) => x + 1)(obj)
  expect(result).toEqual({ a: { b: { c: 2 } } })
})

test('works only on existing paths', () => {
  const result = modifyPath('a.b.d', (x: number) => x + 1)(obj)
  expect(result).toEqual(obj)
})

test('type test', () => {
  const result = pipe(obj, modifyPath(['a', 'b', 'c'], (x: number) => String(x)))
  expectTypeOf(result.a.b.c).toEqualTypeOf<string>()
  expect(result).toEqual({ a: { b: { c: '1' } } })
})
