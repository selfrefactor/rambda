import { take } from './take'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe(['foo', 'bar', 'baz'],take(1))
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toEqual(['foo'])
})

test('with negative index', () => {
  expect(take(-1)([1, 2, 3])).toEqual([1, 2, 3])
  expect(take(Number.NEGATIVE_INFINITY)([1, 2, 3])).toEqual([1, 2, 3])
})

test('with zero index', () => {
  expect(take(0)([1, 2, 3])).toEqual([])
})
