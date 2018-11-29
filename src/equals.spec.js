import { equals } from './equals'

test('', () => {
  const result = equals(
    [ 1, { a : 1 }, [ { b : 3 } ] ],
    [ 1, { a : 2 }, [ { b : 3 } ] ]
  )

  expect(result).toBeFalsy()
})

test('ramda spec', () => {
  expect(equals({}, {})).toEqual(true)

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        a : 1,
        b : 2,
      }
    )
  ).toEqual(true)

  expect(
    equals(
      {
        a : 2,
        b : 3,
      },
      {
        b : 3,
        a : 2,
      }
    )
  ).toEqual(true)

  expect(
    equals(
      {
        a : 2,
        b : 3,
      },
      {
        a : 3,
        b : 3,
      }
    )
  ).toEqual(false)

  expect(
    equals(
      {
        a : 2,
        b : 3,
        c : 1,
      },
      {
        a : 2,
        b : 3,
      }
    )
  ).toEqual(false)
})

test('works with boolean tuple', () => {
  expect(equals([ true, false ], [ true, false ])).toBeTruthy()
  expect(equals([ true, false ], [ true, true ])).toBeFalsy()
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
  expect(equals(x, y)).toBeTruthy()
})

test('works with different objects within array', () => {
  const objFirst = { a : { b : 1 } }
  const objSecond = { a : { b : 2 } }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeFalsy()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalsy()

  expect(equals(undefined, undefined)).toBeTruthy()
})

test('various examples', () => {
  expect(equals([ 1, 2, 3 ])([ 1, 2, 3 ])).toBeTruthy()

  expect(equals([ 1, 2, 3 ], [ 1, 2 ])).toBeFalsy()

  expect(equals(1, 1)).toBeTruthy()

  expect(equals(1, '1')).toBeFalsy()

  expect(equals({}, {})).toBeTruthy()

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        b : 2,
        a : 1,
      }
    )
  ).toBeTruthy()

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        a : 1,
        b : 1,
      }
    )
  ).toBeFalsy()

  expect(
    equals(
      {
        a : 1,
        b : false,
      },
      {
        a : 1,
        b : 1,
      }
    )
  ).toBeFalsy()

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        b : 2,
        a : 1,
        c : 3,
      }
    )
  ).toBeFalsy()

  expect(
    equals(
      {
        x : {
          a : 1,
          b : 2,
        },
      },
      {
        x : {
          b : 2,
          a : 1,
          c : 3,
        },
      }
    )
  ).toBeFalsy()

  expect(
    equals(
      {
        a : 1,
        b : 2,
      },
      {
        b : 3,
        a : 1,
      }
    )
  ).toBeFalsy()

  expect(
    equals({ a : { b : { c : 1 } } }, { a : { b : { c : 1 } } })
  ).toBeTruthy()

  expect(
    equals({ a : { b : { c : 1 } } }, { a : { b : { c : 2 } } })
  ).toBeFalsy()

  expect(equals({ a : {} }, { a : {} })).toBeTruthy()

  expect(equals('', '')).toBeTruthy()

  expect(equals('foo', 'foo')).toBeTruthy()

  expect(equals('foo', 'bar')).toBeFalsy()

  expect(equals(0, false)).toBeFalsy()

  expect(equals(/\s/g, null)).toBeFalsy()

  expect(equals(null, null)).toBeTruthy()

  expect(equals(false)(null)).toBeFalsy()
})
