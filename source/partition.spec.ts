import { partition } from './partition'
import { pipe } from './pipe'

test('happy', () => {
  const list = [1, 2, 3]
  const predicate = (x: number) => x > 2
  const result = partition(predicate)(list)
  expect(result).toEqual([[3], [1, 2]])
})

test('type test', () => {
  const list = [1, 2, 3, 4]
  const result = pipe(list, partition((x: number) => x > 2))
  expectTypeOf(result).toEqualTypeOf<[number[], number[]]>()
  expect(result).toEqual([[3, 4], [1, 2]])
})
