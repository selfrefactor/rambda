import { propIs } from './propIs.js'

const obj = {
  a: 1,
  b: 'foo',
}

test('when true', () => {
  expect(propIs(Number, 'a', obj)).toBeTruthy()
  expect(propIs(String, 'b', obj)).toBeTruthy()
})

test('when false', () => {
  expect(propIs(String, 'a', obj)).toBeFalsy()
  expect(propIs(Number, 'b', obj)).toBeFalsy()
})
