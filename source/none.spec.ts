import { none } from './none'
import { pipe } from './pipe'

const isEven = (n: number) => n % 2 === 0

test('happy', () => {
  const result = pipe([1, 2, 3], none(x => x > 0))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBeFalsy()
})

test('when true', () => {
  expect(none(isEven)([1, 3, 5, 7])).toBeTruthy()
})
