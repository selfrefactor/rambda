import { addProp } from './addProp'
import { pipe } from './pipe'

test('type test', () => {
  const result = pipe({ a: 1, b: 'foo' }, addProp('c', 3))
  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.b).toEqualTypeOf<string>()
  expectTypeOf(result.c).toEqualTypeOf<number>()
  expect(result).toEqual({ a: 1, b: 'foo', c: 3 })
})
