import { exists } from './exists'
import { propEq } from './propEq'
import { pipe } from './pipe'

const list = [{ a: 1 }, { a: 2 }, { a: 3 }]

test('happy', () => {
  const fn = propEq(2, 'a')
  expect(exists(fn)(list)).toBe(true)
})

test('nothing is found', () => {
  const fn = propEq(4, 'a')
  expect(exists(fn)(list)).toBe(false)
})

test('type test', () => {
  const predicate = (x: number) => x > 2
  const result = pipe([1, 2, 3], exists(predicate))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(true)
})
