import { excludes } from './excludes'
import { pipe } from './pipe'

test('happy', () => {
  const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
  const result = pipe({ a: { b: '1' } }, excludes(list))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(false)

  const stringResult = pipe('foo', excludes('bar'))
  expectTypeOf(stringResult).toEqualTypeOf<boolean>()
  expect(stringResult).toBe(true)
})

test('excludes with string', () => {
  const str = 'more is less'
  expect(excludes(str)('less')).toBeFalsy()
  expect(excludes(str)('never')).toBeTruthy()
})

test('excludes with array', () => {
  const arr = [1, 2, 3]
  expect(excludes(arr)(2)).toBeFalsy()
  expect(excludes(arr)(4)).toBeTruthy()
})
