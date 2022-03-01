import { equals } from './equals.js'
import { whereAny } from './whereAny.js'

const conditions = {
  a : equals('foo'),
  b : equals('bar'),
}

test('happy', () => {
  expect(whereAny(conditions, {
    a : 1,
    b : 'bar',
  })).toBeTrue()
})

test('curried', () => {
  expect(whereAny(conditions)({ a : 1 })).toBeFalse()
})
