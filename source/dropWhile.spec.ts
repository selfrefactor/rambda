import { dropWhile } from './dropWhile'
import { pipe } from './pipe'

const list = [1, 2, 3, 4]

test('happy', () => {
  const result = pipe(
    [1, 2, 3],
    dropWhile((x: number) => x < 3),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([3])
})

test('always false', () => {
  const predicate = () => false
  const result = dropWhile(predicate)(list)
  expect(result).toEqual(list)
})

test('with index', () => {
  const result = pipe(
    [1, 2, 3],
    dropWhile((x: number, i: number) => {
      expectTypeOf(i).toEqualTypeOf<number>()
      return x + i > 2
    }),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1, 2, 3])
})
