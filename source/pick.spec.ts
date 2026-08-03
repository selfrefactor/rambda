import { pick } from './pick'
import { pipe } from './pipe'

test('props to pick is a string', () => {
  const obj = { a: 1, b: 2, c: 3 }
  expect(pick('a,c')(obj)).toEqual({ a: 1, c: 3 })
})

test('when prop is missing', () => {
  const obj = { a: 1, b: 2, c: 3 }
  expect(pick('a,d,f')(obj as any)).toEqual({ a: 1 })
})

test('props to pick is an array', () => {
  expect(pick(['a', 'c'])({ a: 'foo', b: 'bar' } as any)).toEqual({ a: 'foo' })
})

test('type test', () => {
  const input = { a: 'foo', c: 3 }
  const result = pipe(input, pick('a,c'))
  expectTypeOf(result.a).toEqualTypeOf<string>()
  expectTypeOf(result.c).toEqualTypeOf<number>()
  expect(result).toEqual({ a: 'foo', c: 3 })
})
