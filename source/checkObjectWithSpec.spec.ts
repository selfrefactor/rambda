import { checkObjectWithSpec } from './checkObjectWithSpec.js'
import { equals } from './equals.js'

test('when true', () => {
  const result = checkObjectWithSpec({
    a: equals('foo'),
    b: equals('bar'),
  })({
    a: 'foo',
    b: 'bar',
    x: 11,
    y: 19,
  })
  expect(result).toBeTruthy()
})

test('when false | early exit', () => {
  let counter = 0
  const equalsFn = (expected: string) => (input: string) => {
    counter++
    return input === expected
  }
  const predicate = checkObjectWithSpec({
    a: equalsFn('foo'),
    b: equalsFn('baz'),
  })
  expect(
    predicate({
      a: 'notfoo',
      b: 'notbar',
    }),
  ).toBeFalsy()
  expect(counter).toBe(1)
})

test('type test', () => {
  const input = {
    a: 'foo',
    b: 'bar',
    x: 11,
    y: 19,
  }
  const conditions = {
    a: equals('foo'),
    b: equals('bar'),
  }
  const result = checkObjectWithSpec(conditions)(input)
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(true)
})
