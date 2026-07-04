import { intersectionWith } from './intersectionWith'
import { pipe } from './pipe'

test('readme example', () => {
  const list1 = [1, 2, 3, 4, 5]
  const list2 = [4, 5, 6]
  const predicate = (x: number, y: number) => x >= y
  const result = intersectionWith(predicate, list1)(list2)
  expect(result).toEqual([4, 5])
})

test('type test', () => {
  const list1 = [1, 2, 3]
  const list2 = [1, 3, 5]
  const result = pipe(list1, intersectionWith((x, y) => x === y, list2))
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1, 3])
})
