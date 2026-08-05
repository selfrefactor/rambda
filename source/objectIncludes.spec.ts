import { objectIncludes } from './objectIncludes'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe({ a: 1, b: 2, c: { d: 3 } }, objectIncludes({ a: 2 }))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBeFalsy()
})

test('when true', () => {
  const condition = { a: 1 }
  const input = { a: 1, b: 2 }
  expect(objectIncludes(condition)(input)).toBeTruthy()
})

test('when false', () => {
  const condition = { a: 1 }
  const input = { b: 2 }
  expect(objectIncludes(condition as Record<string, number>)(input)).toBeFalsy()
})

test('with nested object', () => {
  const condition = { a: { b: 1 } }
  const input = { a: { b: 1 }, c: 2 }
  expect(objectIncludes(condition)(input)).toBeTruthy()
})

test('with wrong input', () => {
  const condition = { a: { b: 1 } }
  expect(() => objectIncludes(condition)(null as any)).toThrow()
})
