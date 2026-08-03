import { omit } from './omit'
import { pipe } from './pipe'

test('with string as condition', () => {
  const obj = { a: 1, b: 2, c: 3 }
  expect(omit('a,c')(obj)).toEqual({ b: 2 })
})

test('with array as condition', () => {
  expect(omit(['a', 'c', 'd'])({ a: 'foo', b: 'bar', c: 'baz' } as any)).toEqual({ b: 'bar' })
})

test('type test', () => {
  const input = { a: 'foo', b: 2, c: 3 }
  const result = pipe(input, omit('a,b'))
  expectTypeOf(result.c).toEqualTypeOf<number>()
  expect(result).toEqual({ c: 3 })
})
