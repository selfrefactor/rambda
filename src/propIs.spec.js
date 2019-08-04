import { propIs } from './propIs'

test('propIs', () => {
  expect(propIs(Number, 'value', { value : 1 })).toEqual(true)
  expect(propIs(String, 'value', { value : 1 })).toEqual(false)
  expect(propIs(String, 'value', {})).toEqual(false)
})
