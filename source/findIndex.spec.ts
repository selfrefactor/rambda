import { findIndex } from './findIndex'
import { propEq } from './propEq'
import { pipe } from './pipe'

const list = [{ a: 1 }, { a: 2 }, { a: 3 }]

test('happy', () => {
  expect(findIndex(propEq(2, 'a'))(list)).toBe(1)
  expect(findIndex(propEq(1, 'a'))(list)).toBe(0)
  expect(findIndex(propEq(4, 'a'))(list)).toBe(-1)
})

test('type test', () => {
  const result = pipe(
    [1, 2, 3],
    findIndex((x: number) => x > 2),
  )
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(2)
})
