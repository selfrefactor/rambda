import { pipe } from './pipe'
import { zipWith } from './zipWith'

const add = (x: number, y: number) => x + y
const list1 = [1, 2, 3]
const list2 = [10, 20, 30, 40]
const list3 = [100, 200]

test('happy', () => {
  const result = pipe(
    list2,
    zipWith((x, y) => {
      expectTypeOf(x).toEqualTypeOf<number>()
      expectTypeOf(y).toEqualTypeOf<number>()
      return `${x}-${y}`
    }, list1),
  )

  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toEqual(['1-10', '2-20', '3-30'])
})

test('when second list is shorter', () => {
  const result = zipWith(add, list1)(list3)
  expect(result).toEqual([101, 202])
})

test('when second list is longer', () => {
  const result = zipWith(add, list1)(list2)
  expect(result).toEqual([11, 22, 33])
})
