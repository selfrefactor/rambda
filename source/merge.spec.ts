import { merge } from './merge'
import { mergeTypes } from './mergeTypes'
import { pipe } from './pipe'

test('happy', () => {
  const obj = { foo: 1, bar: 2 }
  expect(merge(obj)({ bar: 20 })).toEqual({ foo: 1, bar: 20 })
})

test('type test', () => {
  const result = pipe({ foo: 1 }, merge({ bar: 2 }), mergeTypes)
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  expectTypeOf(result.bar).toEqualTypeOf<number>()
  expect(result).toEqual({ foo: 1, bar: 2 })
})
