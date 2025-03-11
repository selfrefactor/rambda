import { assocPath } from './assocPath.js'

test('happy', () => {
  const path = 'a.b.d'
  const input = {
    a: {
      b: {
        c: 1,
      },
    },
  }
  console.log(assocPath(path, 2)(input))
  expect(assocPath(path, 2)(input)).toEqual({
    a: {
      b: {
        c: 1,
        d: 2,
      },
    },
  })
})

test("difference with ramda - doesn't overwrite primitive values with keys in the path", () => {
  const obj = { a: 'str' }
  const result = assocPath(['a', 'b'], 42)(obj)
  console.log(result)

  expect(result).toEqual({
    a: {
      0: 's',
      1: 't',
      2: 'r',
      b: 42,
    },
  })
})

test('adds a key to an empty object', () => {
  expect(assocPath(['a'], 1)({})).toEqual({ a: 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assocPath('b', 2, { a: 1 })).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPath('b.c', 2)({ a: 1 })).toEqual({
    a: 1,
    b: { c: 2 },
  })
})

test('adds a nested key to a nested non-empty object', () => {
  expect(
    assocPath(
      'b.d',
      3,
    )({
      a: 1,
      b: { c: 2 },
    }),
  ).toEqual({
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
  })
})

test('adds a key to a non-empty object', () => {
  expect(assocPath('b', 2)({ a: 1 })).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPath('b.c', 2)({ a: 1 })).toEqual({
    a: 1,
    b: { c: 2 },
  })
})

test('changes an existing key', () => {
  expect(assocPath('a', 2)({ a: 1 })).toEqual({ a: 2 })
})

test('undefined is considered an empty object', () => {
  expect(assocPath('a', 1)(undefined)).toEqual({ a: 1 })
})

test('assignment is shallow', () => {
  expect(assocPath('a', { b: 2 })({ a: { c: 3 } })).toEqual({ a: { b: 2 } })
})

test('empty array as path', () => {
  const result = assocPath(
    [],
    3,
  )({
    a: 1,
    b: 2,
  })
  expect(result).toBe(3)
})

test('happy', () => {
  const expected = { foo: { bar: { baz: 42 } } }
  const result = assocPath(['foo', 'bar', 'baz'], 42, { foo: null })
  expect(result).toEqual(expected)
})
