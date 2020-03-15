import { propIs } from './propIs'

test('1', () => {
  expect(propIs(
    Number, 'value', { value : 1 }
  )).toEqual(true)
})

test('2', () => {
  expect(propIs(
    String, 'value', { value : 1 }
  )).toEqual(false)
})

test('3', () => {
  expect(propIs(String)('value')({})).toEqual(false)
})
