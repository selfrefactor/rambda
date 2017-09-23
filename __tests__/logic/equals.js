const R = require('../../rambda')

test('works with undefined as second argument', () => {
  expect(
    R.equals(1, undefined)
  ).toBeFalsy()

  expect(
    R.equals(undefined, undefined)
  ).toBeTruthy()
})

test('', () => {
  expect(
    R.equals([ 1, 2, 3 ])([ 1, 2, 3 ])
  ).toBeTruthy()

  expect(
    R.equals([ 1, 2, 3 ], [ 1, 2 ])
  ).toBeFalsy()

  expect(
    R.equals(1, 1)
  ).toBeTruthy()

  expect(
    R.equals(1, '1')
  ).toBeFalsy()

  expect(
    R.equals({}, {})
  ).toBeTruthy()

  expect(
    R.equals({
      a : 1,
      b : 2,
    }, {
      b : 2,
      a : 1,
    })
  ).toBeTruthy()

  expect(
    R.equals({
      a : 1,
      b : 2,
    }, {
      a : 1,
      b : 1,
    })
  ).toBeFalsy()

  expect(
    R.equals({
      a : 1,
      b : false,
    }, {
      a : 1,
      b : 1,
    })
  ).toBeFalsy()

  expect(
    R.equals({
      a : 1,
      b : 2,
    }, {
      b : 2,
      a : 1,
      c : 3,
    })
  ).toBeFalsy()

  expect(
    R.equals({
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
    })
  ).toBeFalsy()

  expect(
    R.equals({
      a : 1,
      b : 2,
    }, {
      b : 3,
      a : 1,
    })
  ).toBeFalsy()

  expect(
    R.equals({ a : { b : { c : 1 } } }, { a : { b : { c : 1 } } })
  ).toBeTruthy()

  expect(
    R.equals({ a : { b : { c : 1 } } }, { a : { b : { c : 2 } } })
  ).toBeFalsy()

  expect(
    R.equals({ a : {} }, { a : {} })
  ).toBeTruthy()

  expect(
    R.equals('', '')
  ).toBeTruthy()

  expect(
    R.equals('foo', 'foo')
  ).toBeTruthy()

  expect(
    R.equals('foo', 'bar')
  ).toBeFalsy()

  expect(
    R.equals(0, false)
  ).toBeFalsy()

  expect(
    R.equals(/\s/g, null)
  ).toBeFalsy()

  expect(
    R.equals(null, null)
  ).toBeTruthy()

  expect(
    R.equals(false)(null)
  ).toBeFalsy()
})
