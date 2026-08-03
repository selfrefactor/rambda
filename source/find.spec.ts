import { find } from './find'
import { propEq } from './propEq'
import { pipe } from './pipe'

const list = [{ a: 1 }, { a: 2 }, { a: 3 }]

test('happy', () => {
  const fn = propEq(2, 'a')
  const result = find(fn)(list)
  expectTypeOf(result).toEqualTypeOf<{ a: number } | undefined>()
  expect(result).toEqual({ a: 2 })
})

test('nothing is found', () => {
  const fn = propEq(4, 'a')
  expect(find(fn)(list)).toBeUndefined()
})

test('with empty list', () => {
  expect(find(() => true)([])).toBeUndefined()
})

test('has type guard narrowing', () => {
  const items = ['hello', 'world', 42] as (string | number)[]
  const result = pipe(
    items,
    find((x): x is string => typeof x === 'string'),
  )
  expectTypeOf(result).toEqualTypeOf<string | undefined>()
  expect(result).toBe('hello')
})
