import { count } from './count'
import { pipe } from './pipe'

const predicate = (x: any) => x.a !== undefined

test('with empty list', () => {
  expect(count(predicate)([])).toBe(0)
})

test('happy', () => {
  const list = [1, 2, { a: 1 }, 3, { a: 1 }]
  expect(count(predicate)(list)).toBe(2)
})

test('type test', () => {
  const list = [1, 2, 3]
  const result = pipe(list, count((x: number) => x > 1))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})
