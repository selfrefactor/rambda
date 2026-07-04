import { objOf } from './objOf'
import { pipe } from './pipe'

test('happy', () => {
  expect(objOf('foo')(42)).toEqual({ foo: 42 })
})

test('type test', () => {
  const result = pipe(42, objOf('foo'))
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  expect(result).toEqual({ foo: 42 })
})
