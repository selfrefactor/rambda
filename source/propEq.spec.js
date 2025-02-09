import { BAR, FOO } from './_internals/testUtils.js'
import { propEq } from './propEq.js'

test('happy', () => {
  const obj = { [FOO]: BAR }
  expect(propEq(BAR, FOO)(obj)).toBeTrue()
  expect(propEq(1, FOO)(obj)).toBeFalse()
  expect(propEq(1)(FOO)(obj)).toBeFalse()
  expect(propEq(1, 1, null)).toBeFalse()
})

test('returns false if called with a null or undefined object', () => {
  expect(propEq('name', 'Abby', null)).toBeFalse()
  expect(propEq('name', 'Abby', undefined)).toBeFalse()
})
