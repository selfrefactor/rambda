import {pass} from './pass'

test('true on success', () => {
  const result = pass(1, 'foo', {})('number', 'string', 'object')

  expect(result).toBeTrue()
})

test('false on failure', () => {
  expect(pass(1, 'foo', {})('number', 'string', 'string')).toBeFalse()
})

test('true when single schema', () => {
  expect(pass(1, 2, 3)('number')).toBeTrue()
})

test('false when single schema', () => {
  expect(pass(1, 'foo', {})('number')).toBeFalse()
})

test('array of schemas', () => {
  const result = pass([{a: 1}, {a: 2}, {a: 3}])([{a: Number}])
  expect(result).toBeTruthy()
})

test('reame example', () => {
  const result = pass(1, ['foo', 'bar'])(Number, [String])
  expect(result).toBeTruthy()
})
