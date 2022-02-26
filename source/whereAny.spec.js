import { equals } from './equals';
import { whereAny } from './whereAny'

const conditions = {
  a: equals('foo'),
  b: equals('bar'),
}

test('happy', () => {
  expect(whereAny(conditions, {a: 1, b: 'bar'})).toBeTrue()
})

test('curried', () => {
  expect(whereAny(conditions)({a: 1})).toBeFalse()
})
