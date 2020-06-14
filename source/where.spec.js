import { equals } from './equals'
import { where } from './where'

test('when true', () => {
  const pred = where({
    a : equals('foo'),
    b : equals('bar'),
  })
  expect(pred({
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })).toEqual(true)
})

test('when false', () => {
  const pred = where({
    a : equals('foo'),
    b : equals('baz'),
  })
  expect(pred({
    a : 'foo',
    b : 'bar',
    x : 11,
    y : 19,
  })).toEqual(false)
})
