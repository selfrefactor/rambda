import { maxBy } from './maxBy'
import { pipe } from './pipe'

test('happy', () => {
  const first = 1
  const second = 2
  const result = pipe(second, maxBy(x => (x % 2 === 0 ? 1 : -1), first))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})
