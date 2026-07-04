import { last } from './last'

test('with list', () => {
  expect(last([1, 2, 3])).toBe(3)
  expect(last([])).toBeUndefined()
})

test('with string', () => {
  expect(last('abc')).toBe('c')
  expect(last('')).toBe('')
})

test('type test', () => {
  expectTypeOf(last([1, 2, 3])).toEqualTypeOf<number>()
  expectTypeOf(last([])).toEqualTypeOf<never>()
  expectTypeOf(last('abc')).toEqualTypeOf<string>()
  expect(last([1, 2, 3])).toBe(3)
})
