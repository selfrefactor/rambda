import { unwind } from './unwind'
import { pipe } from './pipe'

const obj = {
  a: 1,
  b: [2, 3],
}

test('happy', () => {
  const obj = {
    a: 1,
    b: [2, 3],
    c: [3, 4],
  }
  const expected = [
    { a: 1, b: 2, c: [3, 4] },
    { a: 1, b: 3, c: [3, 4] },
  ]
  const result = unwind('b')(obj)
  expect(result).toEqual(expected)
})

test('type test', () => {
  const [result] = unwind('b')(obj)

  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.b).toEqualTypeOf<number>()
  expect(result).toEqual({ a: 1, b: 2 })
})

test('inside pipe', () => {
  const [result] = pipe(obj, unwind('b'))

  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.b).toEqualTypeOf<number>()
  expect(result).toEqual({ a: 1, b: 2 })
})
