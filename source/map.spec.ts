import { map } from './map'
import { pipe } from './pipe'

const double = (x: number) => x * 2

test('happy', () => {
  expect(map(double)([1, 2, 3])).toEqual([2, 4, 6])
})

test('type test', () => {
  const list = [1, 2, 3]
  const result = pipe(list, x => x, map(x => String(x)))
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toEqual(['1', '2', '3'])
})
