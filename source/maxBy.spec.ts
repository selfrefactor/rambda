import { maxBy } from './maxBy'
import { pipe } from './pipe'

test('happy', () => {
  expect(maxBy<number>(Math.abs, 2)(-5)).toBe(-5)
  expect(maxBy<number>(Math.abs, -5)(2)).toBe(-5)
})

test('type test', () => {
  const first = 1
  const second = 2
  const result = pipe(second, maxBy(x => (x % 2 === 0 ? 1 : -1), first))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})
