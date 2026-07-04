import { sortByDescending } from './sortByDescending'
import { path } from './path'

const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: { b: 2 } }]
const sorted = [{ a: { b: 3 } }, { a: { b: 2 } }, { a: { b: 1 } }]

test('happy', () => {
  expect(sortByDescending(path('a.b'))(list)).toEqual(sorted)
})

test('type test', () => {
  const result = sortByDescending(path('a.b'))(list)
  expectTypeOf(result).toEqualTypeOf<typeof list>()
  expect(result).toEqual(sorted)
})
