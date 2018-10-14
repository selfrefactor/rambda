const R = require('../../rambda')

test('dev', () => {
  const result = R.equals(
    [ 1, { a : 1 }, [ { b : 3 } ] ],
    [ 1, { a : 2 }, [ { b : 3 } ] ]
  )

  expect(
    result
  ).toBeFalsy()
})

test('Ramda spec', () => {
  expect(R.equals({}, {})).toEqual(true)
  expect(R.equals({
    a : 1,
    b : 2,
  }, {
    a : 1,
    b : 2,
  })).toEqual(true)
  expect(R.equals({
    a : 2,
    b : 3,
  }, {
    b : 3,
    a : 2,
  })).toEqual(true)
  expect(R.equals({
    a : 2,
    b : 3,
  }, {
    a : 3,
    b : 3,
  })).toEqual(false)
  expect(R.equals({
    a : 2,
    b : 3,
    c : 1,
  }, {
    a : 2,
    b : 3,
  })).toEqual(false)
})

test('works with boolean tuple', () => {
  expect(R.equals([ true, false ], [ true, false ])).toBeTruthy()
  expect(R.equals([ true, false ], [ true, true ])).toBeFalsy()
})

test('works with equal objects within array', () => {
  const objFirst = {
    a : {
      b : 1,
      c : 2,
      d : [ 1 ],
    },
  }
  const objSecond = {
    a : {
      b : 1,
      c : 2,
      d : [ 1 ],
    },
  }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(R.equals(x, y)).toBeTruthy()
})

test('works with different objects within array', () => {
  const objFirst = { a : { b : 1 } }
  const objSecond = { a : { b : 2 } }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(R.equals(x, y)).toBeFalsy()
})

test('works with undefined as second argument', () => {
  expect(R.equals(1, undefined)).toBeFalsy()

  expect(R.equals(undefined, undefined)).toBeTruthy()
})

test('various examples', () => {
  expect(R.equals([ 1, 2, 3 ])([ 1, 2, 3 ])).toBeTruthy()

  expect(R.equals([ 1, 2, 3 ], [ 1, 2 ])).toBeFalsy()

  expect(R.equals(1, 1)).toBeTruthy()

  expect(R.equals(1, '1')).toBeFalsy()

  expect(R.equals({}, {})).toBeTruthy()

  expect(R.equals({
    a : 1,
    b : 2,
  }, {
    b : 2,
    a : 1,
  })).toBeTruthy()

  expect(R.equals({
    a : 1,
    b : 2,
  }, {
    a : 1,
    b : 1,
  })).toBeFalsy()

  expect(R.equals({
    a : 1,
    b : false,
  }, {
    a : 1,
    b : 1,
  })).toBeFalsy()

  expect(R.equals({
    a : 1,
    b : 2,
  }, {
    b : 2,
    a : 1,
    c : 3,
  })).toBeFalsy()

  expect(R.equals({
    x : {
      a : 1,
      b : 2,
    },
  }, {
    x : {
      b : 2,
      a : 1,
      c : 3,
    },
  })).toBeFalsy()

  expect(R.equals({
    a : 1,
    b : 2,
  }, {
    b : 3,
    a : 1,
  })).toBeFalsy()

  expect(R.equals({ a : { b : { c : 1 } } }, { a : { b : { c : 1 } } })).toBeTruthy()

  expect(R.equals({ a : { b : { c : 1 } } }, { a : { b : { c : 2 } } })).toBeFalsy()

  expect(R.equals({ a : {} }, { a : {} })).toBeTruthy()

  expect(R.equals('', '')).toBeTruthy()

  expect(R.equals('foo', 'foo')).toBeTruthy()

  expect(R.equals('foo', 'bar')).toBeFalsy()

  expect(R.equals(0, false)).toBeFalsy()

  expect(R.equals(/\s/g, null)).toBeFalsy()

  expect(R.equals(null, null)).toBeTruthy()

  expect(R.equals(false)(null)).toBeFalsy()
})
