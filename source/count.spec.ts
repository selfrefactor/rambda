import { count } from './count'
import { pipe } from './pipe'

const predicate = (x: any) => x.a !== undefined

test('happy', () => {
  const list = [1, 2, 3]
  const result = pipe(list, count((x: number) => x > 1))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})

test('with empty list', () => {
  expect(count(predicate)([])).toBe(0)
})
