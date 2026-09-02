import { objOf } from './objOf'
import { pipe } from './pipe'


test('happy', () => {
  const result = pipe(42, objOf('foo'))
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  expect(result).toEqual({ foo: 42 })
})
