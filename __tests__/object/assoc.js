const R = require('../../rambda')

test('adds a key to an empty object', () => {
  expect(R.assoc('a', 1, {})).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(R.assoc('b', 2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('changes an existing key', () => {
  expect(R.assoc('a', 2, { a : 1 })).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(R.assoc('a', 1, undefined)).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(R.assoc('a', 1, null)).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(R.assoc('a', null, null)).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(R.assoc('a', undefined, null)).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(R.assoc('a', { b : 2 }, { a : { c : 3 } })).toEqual({ a : { b : 2 } })
})
