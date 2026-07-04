import { sort } from './sort'
import { pipe } from './pipe'

const fn = (a: number, b: number) => (a > b ? 1 : -1)

test('sort', () => {
  expect(sort((a: number, b: number) => a - b)([2, 3, 1])).toEqual([1, 2, 3])
})

test("it doesn't mutate", () => {
  const list = ['foo', 'bar', 'baz']
  expect(sort(fn as any)(list)).toEqual(['bar', 'baz', 'foo'])
  expect(list).toEqual(['foo', 'bar', 'baz'])
})

test('type test', () => {
  const list = [3, 0, 5, 2, 1]
  const result = sort<number>((a, b) => (a > b ? 1 : -1))(list)
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([0, 1, 2, 3, 5])
})
