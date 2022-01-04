import {propIs} from './propIs'

const obj = {a: 1, b: 'foo'}

test('when true', () => {
  expect(propIs(Number, 'a', obj)).toBeTrue()
  expect(propIs(String, 'b', obj)).toBeTrue()
})

test('when false', () => {
  expect(propIs(String, 'a', obj)).toBeFalse()
  expect(propIs(Number, 'b', obj)).toBeFalse()
})
