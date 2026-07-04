import { flatMap } from './flatMap'
import { pipe } from './pipe'

const duplicate = (n: number) => [n, n]

test('happy', () => {
  const fn = (x: number) => [x * 2]
  const list = [1, 2, 3]
  const result = flatMap(fn)(list)
  expect(result).toEqual([2, 4, 6])
})

test('maps then flattens one level', () => {
  expect(flatMap(duplicate)([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('flattens only one level', () => {
  const nest = (n: number) => [[n]]
  expect(flatMap(nest)([1, 2, 3])).toEqual([[1], [2], [3]])
})

test('can compose', () => {
  function dec(x: number) {
    return [x - 1]
  }
  function times2(x: number) {
    return [x * 2]
  }
  const mdouble = flatMap(times2)
  const mdec = flatMap(dec)
  expect(mdec(mdouble([10, 20, 30]))).toEqual([19, 39, 59])
})

test('type test', () => {
  const listOfLists: string[][] = [
    ['f', 'bar'],
    ['baz', 'b'],
  ]
  const result = pipe(
    listOfLists,
    (x: string[][]) => x,
    flatMap((x: string) => {
      expectTypeOf(x).toEqualTypeOf<string>()
      return Number(x) + 1
    }),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
})
