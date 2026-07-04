import { allPass } from './allPass.js'
import { filter } from './filter.js'
import { pipe } from './pipe.js'

const list = [
  [1, 2, 3, 4],
  [3, 4, 5],
]

test('happy', () => {
  const result = pipe(list, filter(allPass([(x: number[]) => x.includes(2), (x: number[]) => x.includes(3)])))
  expect(result).toEqual([[1, 2, 3, 4]])
})

test('when returns false', () => {
  const result = pipe(list, filter(allPass([(x: number[]) => x.includes(12), (x: number[]) => x.includes(31)])))
  expect(result).toEqual([])
})

test('type test', () => {
  const list2 = [
    [1, 2, 3, 4],
    [3, 4, 5],
  ]
  const result = pipe(list2, filter(allPass([
    (x: number[]) => x.length > 2,
    (x: number[]) => x.includes(3),
  ])))
  expectTypeOf(result).toEqualTypeOf<number[][]>()
  expect(result).toEqual([[1, 2, 3, 4], [3, 4, 5]])
})
