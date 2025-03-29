import { propEq } from './propEq.js'

const FOO = 'foo'
const BAR = 'bar'

test('happy', () => {
  const obj = { [FOO]: BAR }
  expect(propEq(BAR, FOO)(obj)).toBeTruthy()
  expect(propEq(1, FOO)(obj)).toBeFalsy()
  expect(propEq(1, 1)(null)).toBeFalsy()
})

test('returns false if called with a null or undefined object', () => {
  expect(propEq('name', 'Abby')(null)).toBeFalsy()
  expect(propEq('name', 'Abby')(undefined)).toBeFalsy()
})
