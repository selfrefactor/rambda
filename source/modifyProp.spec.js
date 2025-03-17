import { modifyProp } from './modifyProp.js'

const person = {
  name : 'foo',
  age  : 20,
}

test('happy', () => {
  expect(modifyProp(
    'age', x => x + 1)(person
  )).toEqual({
    name : 'foo',
    age  : 21,
  })
})

test('property is missing', () => {
  expect(modifyProp(
    'foo', x => x + 1)(person
  )).toEqual(person)
})

test('adjust if `array` at the given key with the `transformation` function', () => {
  expect(modifyProp(
    1, x => x +1)([ 100, 1400 ]
  )).toEqual([ 100, 1401 ])
})

