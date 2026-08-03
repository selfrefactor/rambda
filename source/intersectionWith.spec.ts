import { intersectionWith } from './intersectionWith'
import { pipe } from './pipe'

test('type test', () => {
  const list1 = [1, 2, 3]
  const list2 = [1, 3, 5]
  const result = pipe(list1, intersectionWith((x, y) => x === y, list2))
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1, 3])
})
