import { assocPath } from './assocPath'

test('adds a key to an empty object', () => {
  const testObj = {
    a : [ { b : 1 }, { b : 2 } ],
    d : 3,
  }
  const result = assocPath(
    'a.0.b', 10, testObj
  )
  console.log(result)
})

test.only('bug', () => {
  /*
    https://github.com/selfrefactor/rambda/issues/524
  */
  const state = {}

  const result = assocPath(
    [ 'outerProp', '2020-03-10' ], { prop : 2 }, state
  )
  const incorrect = assocPath(
    [ 'outerProp', '5' ], { prop : 2 }, state
  )

  const expected = { outerProp : { '2020-03-10' : { prop : 2 } } }
  const incorrectExpected = {
    outerProp : [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      { prop : 2 },
    ],
  }
  expect(result).toEqual(expected)
  expect(incorrect).toEqual(incorrectExpected)
})

test('adds a key to an empty object', () => {
  expect(assocPath(
    [ 'a' ], 1, {}
  )).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assocPath(
    'b', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPath(
    'b.c', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('adds a nested key to a nested non-empty object - curry case 1', () => {
  expect(assocPath('b.d',
    3)({
    a : 1,
    b : { c : 2 },
  })).toEqual({
    a : 1,
    b : {
      c : 2,
      d : 3,
    },
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assocPath('b', 2)({ a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object - curry case 1', () => {
  expect(assocPath('b.c', 2)({ a : 1 })).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assocPath('b')(2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assocPath('b')(2)({ a : 1 })

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('changes an existing key', () => {
  expect(assocPath(
    'a', 2, { a : 1 }
  )).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assocPath(
    'a', 1, undefined
  )).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assocPath(
    'a', 1, null
  )).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assocPath(
    'a', null, null
  )).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assocPath(
    'a', undefined, null
  )).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assocPath(
    'a', { b : 2 }, { a : { c : 3 } }
  )).toEqual({ a : { b : 2 } })
})

test('empty array as path', () => {
  const result = assocPath(
    [], 3, {
      a : 1,
      b : 2,
    }
  )
  expect(result).toEqual(3)
})

test('happy', () => {
  const expected = { foo : { bar : { baz : 42 } } }
  const result = assocPath(
    [ 'foo', 'bar', 'baz' ], 42, { foo : null }
  )
  expect(result).toEqual(expected)
})
