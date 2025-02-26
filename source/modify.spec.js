import { add } from './add.js'
import { modify } from './modify.js'

const person = {
  name: 'foo',
  age: 20,
}

test('happy', () => {
  expect(modify('age', x => x + 1, person)).toEqual({
    name: 'foo',
    age: 21,
  })
})

test('property is missing', () => {
  expect(modify('foo', x => x + 1, person)).toEqual(person)
})

test('adjust if `array` at the given key with the `transformation` function', () => {
  expect(modify(1, add(1), [100, 1400])).toEqual([100, 1401])
})

describe('ignores transformations if the input value is not Array and Object', () => {
  ;[42, undefined, null, ''].forEach(value => {
    it(`${value}`, () => {
      expect(modify('a', add(1), value)).toEqual(value)
    })
  })
})
