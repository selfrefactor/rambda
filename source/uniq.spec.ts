import { uniq } from './uniq'


test('happy', () => {
  const result = uniq([1, 2, 3, 3, 3, 1, 2, 0])

  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([1, 2, 3, 0])
})

test('with object', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 1 }, { a: 2 }]
  expect(uniq(list)).toEqual([{ a: 1 }, { a: 2 }])
})

test('with nested array', () => {
  expect(uniq([[42], [42]])).toEqual([[42]])
})

test('with booleans', () => {
  expect(uniq([[false], [false], [true]])).toEqual([[false], [true]])
})

test('with falsy values', () => {
  expect(uniq([undefined, null])).toEqual([undefined, null])
})

test('can distinct between string and number', () => {
  expect(uniq([1, '1'])).toEqual([1, '1'])
})

test('with dates', () => {
  expect(uniq([new Date(0), new Date(0)])).toEqual([new Date(0)])
})

test('with sets', () => {
  expect(uniq([new Set([1]), new Set([1])])).toEqual([new Set([1])])
})

test('with maps', () => {
  expect(uniq([new Map([[1, 2]]), new Map([[1, 2]])])).toEqual([
    new Map([[1, 2]]),
  ])
})

test('with regexes', () => {
  expect(uniq([/a/, /a/])).toEqual([/a/])
})

test('with boxed primitives', () => {
  expect(uniq([new Number(1), new Number(1)])).toHaveLength(1)
  expect(uniq([new String('a'), new String('a')])).toHaveLength(1)
})
