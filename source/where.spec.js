import { equals } from './equals.js'
import { where } from './where.js'

test('when true', () => {
  const predicate = where({
    a : equals('foo'),
    b : equals('bar'),
  })
  expect(predicate({
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })).toBeTrue()
})

test('when false', () => {
  const predicate = where({
    a : equals('foo'),
    b : equals('baz'),
  })
  expect(predicate({
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })).toBeFalse()
})
