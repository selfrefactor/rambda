import { lastIndexOf } from './lastIndexOf'
import { pipe } from './pipe'

test('with NaN', () => {
  expect(lastIndexOf(Number.NaN)([Number.NaN])).toBe(0)
})

test('without list of objects - no R.equals', () => {
  expect(lastIndexOf(3)([1, 2, 3, 4])).toBe(2)
  expect(lastIndexOf(10)([1, 2, 3, 4])).toBe(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }]
  expect(lastIndexOf({ c: 4 } as any)(listOfObjects)).toBe(-1)
  expect(lastIndexOf({ c: 3 } as any)(listOfObjects)).toBe(2)
})

test('list of arrays uses R.equals', () => {
  const listOfLists = [[1], [2, 3], [2, 3, 4], [2, 3], [1], []]
  expect(lastIndexOf([] as number[])(listOfLists)).toBe(5)
  expect(lastIndexOf([1])(listOfLists)).toBe(4)
  expect(lastIndexOf([2, 3, 4])(listOfLists)).toBe(2)
  expect(lastIndexOf([2, 3, 5])(listOfLists)).toBe(-1)
})

test('type test', () => {
  const result = pipe([{ a: 1 }, { a: 2 }, { a: 3 }], lastIndexOf({ a: 2 }))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(1)
})
