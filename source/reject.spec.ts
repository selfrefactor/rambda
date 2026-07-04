import { reject } from './reject'
import { pipe } from './pipe'

test('happy', () => {
  const isEven = (n: number) => n % 2 === 0
  expect(reject(isEven)([1, 2, 3, 4])).toEqual([1, 3])
})

test('type test', () => {
  const list = [1, 2, 3]
  const result = pipe(list, reject(x => x > 1))
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1])
})
