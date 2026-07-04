import { filterMap } from './filterMap'
import { pipe } from './pipe'

const double = (x: number) => x > 1 ? x * 2 : null

test('happy', () => {
  expect(filterMap(double)([1, 2, 3])).toEqual([4, 6])
})

test('within pipe', () => {
  const result = pipe(
    [1, 2, 3],
    (x: number[]) => x,
    filterMap((x: number) => {
      expectTypeOf(x).toEqualTypeOf<number>()
      return Math.random() > 0.5 ? String(x) : null
    }),
    filterMap((x: string) => {
      expectTypeOf(x).toEqualTypeOf<string>()
      return Math.random() > 0.5 ? Number(x) : ''
    }),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
})
