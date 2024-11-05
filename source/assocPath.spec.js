import { assocPathFn } from './assocPath.js'

test('happy', () => {
  const path = 'a.c.1'
  const input = {
    a : {
      b : 1,
      c : [ 1, 2 ],
    },
  }
  assocPathFn(
    path, 3, input
  )
  expect(input).toEqual({
    a : {
      b : 1,
      c : [ 1, 2 ],
    },
  })
})

test('string can be used as path input', () => {
  const testObj = {
    a : [ { b : 1 }, { b : 2 } ],
    d : 3,
  }
  const result1 = assocPathFn(
    [ 'a', 0, 'b' ], 10, testObj
  )
  const result2 = assocPathFn(
    'a.0.b', 10, testObj
  )

  const expected = {
    a : [ { b : 10 }, { b : 2 } ],
    d : 3,
  }
  expect(result1).toEqual(expected)
  expect(result2).toEqual(expected)
})

test('difference with ramda - doesn\'t overwrite primitive values with keys in the path', () => {
  const obj = { a : 'str' }
  const result = assocPathFn(
    [ 'a', 'b' ], 42, obj
  )

  expect(result).toEqual({
    a : {
      0 : 's',
      1 : 't',
      2 : 'r',
      b : 42,
    },
  })
})

test('bug 524', () => {
  /*
    https://github.com/selfrefactor/rambda/issues/524
  */
  const state = {}

  const withDateLike = assocPathFn(
    [ 'outerProp', '2020-03-10' ],
    { prop : 2 },
    state
  )
  const withNumber = assocPathFn(
    [ 'outerProp,5' ], { prop : 2 }, state
  )

  const withDateLikeExpected = { outerProp : { '2020-03-10' : { prop : 2 } } }
  const withNumberExpected = { outerProp : { 5 : { prop : 2 } } }
  expect(withDateLike).toEqual(withDateLikeExpected)
  // expect(withNumber).toEqual(withNumberExpected)
})

test('adds a key to an empty object', () => {
  expect(assocPathFn(
    [ 'a' ], 1, {}
  )).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assocPathFn(
    'b', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPathFn(
    'b.c', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('adds a nested key to a nested non-empty object', () => {
  expect(assocPathFn('b.d',
    3,{
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

test('adds a key to a non-empty object', () => {
  expect(assocPathFn('b', 2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPathFn('b.c', 2, { a : 1 })).toEqual({
    a : 1,
    b : { c : 2 },
  })
})

test('changes an existing key', () => {
  expect(assocPathFn(
    'a', 2, { a : 1 }
  )).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assocPathFn(
    'a', 1, undefined
  )).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assocPathFn(
    'a', 1, null
  )).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assocPathFn(
    'a', null, null
  )).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assocPathFn(
    'a', undefined, null
  )).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assocPathFn(
    'a', { b : 2 }, { a : { c : 3 } }
  )).toEqual({ a : { b : 2 } })
})

test('empty array as path', () => {
  const result = assocPathFn(
    [], 3, {
      a : 1,
      b : 2,
    }
  )
  expect(result).toBe(3)
})

test('happy', () => {
  const expected = { foo : { bar : { baz : 42 } } }
  const result = assocPathFn(
    [ 'foo', 'bar', 'baz' ], 42, { foo : null }
  )
  expect(result).toEqual(expected)
})
