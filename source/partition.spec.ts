import { partition } from './partition'
import { pipe } from './pipe'

test('type test', () => {
  const list = [1, 2, 3, 4]
  const result = pipe(list, partition((x: number) => x > 2))
  expectTypeOf(result).toEqualTypeOf<[number[], number[]]>()
  expect(result).toEqual([[3, 4], [1, 2]])
})
