import { equals } from './equals.js'
import { checkObjectWithSpec } from './checkObjectWithSpec.js'

test('when true', () => {
  const result = checkObjectWithSpec(
    {
      a: equals('foo'),
      b: equals('bar'),
    })(
    {
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    },
  )

  expect(result).toBeTruthy()
})

test('when false | early exit', () => {
  let counter = 0
  const equalsFn = expected => input => {
    console.log(expected, 'expected')
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
