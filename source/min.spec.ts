import { min } from './min'
import { pipe } from './pipe'

const list = [{ a: { b: 2 } }, { a: { b: 5 } }, { a: { b: 1 } }]

test('happy', () => {
  const result = pipe(list, min('a.b'))
  expectTypeOf(result).toEqualTypeOf<{ a: { b: number } } | undefined>()
  expect(result).toEqual({ a: { b: 1 } })
})

test('with selector', () => {
  const result = pipe(list, min(x => x.a.b))
  expectTypeOf(result).toEqualTypeOf<{ a: { b: number } } | undefined>()
  expect(result).toEqual({ a: { b: 1 } })
})

test('with list as path', () => {
  expect(pipe(list, min(['a', 'b']))).toEqual({ a: { b: 1 } })
})

test('with empty list', () => {
  expect(pipe([] as number[], min(x => x))).toBeUndefined()
})

test('with one element', () => {
  expect(min<number>(x => x)([3])).toBe(3)
})

test('when first element is the min', () => {
  expect(min<number>(x => x)([1, 3, 2])).toBe(1)
})

test('with equal values', () => {
  const input = [{ a: 1, id: 'first' }, { a: 1, id: 'second' }]
  expect(pipe(input, min('a'))).toEqual(input[0])
})

test('skips missing path values', () => {
  const input: Array<{ a?: number | null }> = [{ a: 3 }, {}, { a: 1 }, { a: null }]
  expect(pipe(input, min('a'))).toEqual({ a: 1 })
})

test('when all path values are missing', () => {
  const input: Array<{ a?: number | null }> = [{}, { a: null }]
  expect(pipe(input, min('a'))).toBeUndefined()
})
