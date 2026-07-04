import { sortByPathDescending } from './sortByPathDescending'

const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: { b: 2 } }]
const sorted = [{ a: { b: 3 } }, { a: { b: 2 } }, { a: { b: 1 } }]

test('with string as path', () => {
  expect(sortByPathDescending('a.b')(list)).toEqual(sorted)
})

test('with list of strings as path', () => {
  expect(sortByPathDescending(['a', 'b'])(list)).toEqual(sorted)
})

test('type test', () => {
  const result = sortByPathDescending('a.b')(list)
  expectTypeOf(result).toEqualTypeOf<typeof list>()
  expect(result).toEqual(sorted)
})
