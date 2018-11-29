import { assoc } from './assoc'

test('adds a key to an empty object', () => {
  expect(assoc('a', 1, {})).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assoc('b', 2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assoc('b', 2)({ a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assoc('b')(2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assoc('b')(2)({ a : 1 })

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('changes an existing key', () => {
  expect(assoc('a', 2, { a : 1 })).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assoc('a', 1, undefined)).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assoc('a', 1, null)).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assoc('a', null, null)).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assoc('a', undefined, null)).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assoc('a', { b : 2 }, { a : { c : 3 } })).toEqual({ a : { b : 2 } })
})
