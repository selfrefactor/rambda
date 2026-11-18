import { union } from './union'

test('happy', () => {
  const result = union([1, 2])([2, 3])

  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1, 2, 3])
})

test('removes duplicates within both lists', () => {
  expect(union([1, 1])([2])).toEqual([1, 2])
  expect(union([1])([2, 2])).toEqual([1, 2])
  expect(union([1, 1])([2, 2])).toEqual([1, 2])
})

test('uses R.equals for dates', () => {
  const date = new Date(0)

  expect(union([date])([new Date(0)])).toEqual([date])
})

test('type test with array of objects - case 1', () => {
  const list1 = [{ a: 1 }, { a: 2 }]
  const list2 = [{ a: 2 }, { a: 3 }]
  const result = union(list1)(list2)

  expectTypeOf(result).toEqualTypeOf<{ a: number }[]>()
  expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }])
})

test('type test with array of objects - case 2', () => {
  const list1 = [{ a: 1, b: 1 }, { a: 2 }]
  const list2 = [{ a: 2 }, { a: 3, b: 3 }]
  const result = union(list1)(list2)

  expectTypeOf(result[0].a).toEqualTypeOf<number>()
  expectTypeOf(result[0].b).toEqualTypeOf<number | undefined>()
  expect(result).toEqual([{ a: 1, b: 1 }, { a: 2 }, { a: 3, b: 3 }])
})
