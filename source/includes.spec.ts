import { includes } from './includes'
import { pipe } from './pipe'

test('happy', () => {
  const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
  const result = pipe({ a: { b: '1' } }, includes(list))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBeTruthy()
})

test('with string as iterable', () => {
  const str = 'foo bar'
  expect(includes(str)('foo')).toBeTruthy()
  expect(includes(str)('never')).toBeFalsy()
})

test('with array as iterable', () => {
  const arr = [1, 2, 3]
  expect(includes(arr)(2)).toBeTruthy()
  expect(includes(arr)(4)).toBeFalsy()
})

test('with list of objects as iterable', () => {
  const arr = [{ a: 1 }, { b: 2 }, { c: 3 }]
  expect(includes(arr)({ c: 3 })).toBeTruthy()
})

test('with NaN', () => {
  expect(includes([Number.NaN])(Number.NaN)).toBeTruthy()
})

test('with wrong input that does not throw', () => {
  expect(includes([1])(/foo/g as never)).toBeFalsy()
})
