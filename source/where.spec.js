import {equals} from './equals'
import {where} from './where'

test('when true', () => {
  const predicate = where({
    a: equals('foo'),
    b: equals('bar'),
  })
  expect(
    predicate({
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    })
  ).toEqual(true)
})

test('when false', () => {
  const predicate = where({
    a: equals('foo'),
    b: equals('baz'),
  })
  expect(
    predicate({
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    })
  ).toEqual(false)
})
