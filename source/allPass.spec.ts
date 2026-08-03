import { allPass } from './allPass'
import { filter } from './filter'
import { pipe } from './pipe'

const list = [
  [1, 2, 3, 4],
  [3, 4, 5],
]

test('happy', () => {
  const result = pipe(list, filter(allPass([(x: number[]) => x.includes(2), (x: number[]) => x.includes(3)])))
  expectTypeOf(result).toEqualTypeOf<number[][]>()
  expect(result).toEqual([[1, 2, 3, 4]])
})

test('when returns false', () => {
  const result = pipe(list, filter(allPass([(x: number[]) => x.includes(12), (x: number[]) => x.includes(31)])))
  expect(result).toEqual([])
})
