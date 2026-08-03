import { takeLastWhile } from './takeLastWhile'

test('predicate is always true', () => {
  const result = takeLastWhile(() => true)([1, 2, 3, 4])
  expect(result).toEqual([1, 2, 3, 4])
})

test('predicate is always false', () => {
  const result = takeLastWhile(() => false)([1, 2, 3, 4])
  expect(result).toEqual([])
})

test('type test', () => {
  const result = takeLastWhile((x: number) => x > 2)([1, 2, 3, 4])
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([3, 4])
})
