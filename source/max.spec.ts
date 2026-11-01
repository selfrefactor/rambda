import { max } from './max'
import { pipe } from './pipe'

const list = [{ a: { b: 2 } }, { a: { b: 5 } }, { a: { b: 1 } }]

test('happy', () => {
  const result = pipe(list, max('a.b'))
  expectTypeOf(result).toEqualTypeOf<{ a: { b: number } } | undefined>()
  expect(result).toEqual({ a: { b: 5 } })
})

test('with selector', () => {
  const result = pipe(list, max(x => x.a.b))
  expectTypeOf(result).toEqualTypeOf<{ a: { b: number } } | undefined>()
  expect(result).toEqual({ a: { b: 5 } })
})

test('with list as path', () => {
  expect(pipe(list, max(['a', 'b']))).toEqual({ a: { b: 5 } })
})

test('with empty list', () => {
  expect(pipe([] as number[], max(x => x))).toBeUndefined()
})

test('with one element', () => {
  expect(max<number>(x => x)([3])).toBe(3)
})

test('when first element is the max', () => {
  expect(max<number>(x => x)([3, 1, 2])).toBe(3)
})

test('with equal values', () => {
  const input = [{ a: 1, id: 'first' }, { a: 1, id: 'second' }]
  expect(pipe(input, max('a'))).toEqual(input[0])
})

test('skips missing path values', () => {
  const input: Array<{ a?: number | null }> = [{ a: 1 }, {}, { a: 3 }, { a: null }]
  expect(pipe(input, max('a'))).toEqual({ a: 3 })
})

test('when all path values are missing', () => {
  const input: Array<{ a?: number | null }> = [{}, { a: null }]
  expect(pipe(input, max('a'))).toBeUndefined()
})
