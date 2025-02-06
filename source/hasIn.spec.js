import { hasIn as hasInRamda } from 'ramda'

import { hasIn } from './hasIn.js'

const fred = {
  age: 23,
  name: 'Fred',
}
const anon = { age: 99 }

test('returns a function that checks the appropriate property', () => {
  const nm = hasIn('name')
  expect(typeof nm).toBe('function')
  expect(nm(fred)).toBe(true)
  expect(nm(anon)).toBe(false)
})

test('checks properties from the prototype chain', () => {
  function Person() {}
  Person.prototype.age = () => {}

  const bob = new Person()
  expect(hasIn('age', bob)).toBe(true)
})

test('works properly when called with two arguments', () => {
  expect(hasIn('name', fred)).toBe(true)
  expect(hasIn('name', anon)).toBe(false)
})

test('returns false when non-existent object', () => {
  expect(hasIn('name', null)).toBe(false)
  expect(hasIn('name', undefined)).toBe(false)
})
