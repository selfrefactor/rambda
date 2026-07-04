import { tail } from './tail'

test('tail', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3])
  expect(tail([1, 2])).toEqual([2])
  expect(tail([1])).toEqual([])
  expect(tail([])).toEqual([])
  expect(tail('abc')).toBe('bc')
  expect(tail('ab')).toBe('b')
  expect(tail('a')).toBe('')
  expect(tail('')).toBe('')
})

test('type test', () => {
  expectTypeOf(tail('foo')).toEqualTypeOf<string>()
  expectTypeOf(tail(['foo', 'bar', 1, 2, 3])).toEqualTypeOf<(string | number)[]>()
  expect(tail('abc')).toBe('bc')
})
