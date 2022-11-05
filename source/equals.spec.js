import { equals as equalsRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { variousTypes } from './benchmarks/_utils.js'
import { equals } from './equals.js'

test('compare functions', () => {
  function foo(){}
  function bar(){}
  const baz = () => {}

  const expectTrue = equals(foo, foo)
  const expectFalseFirst = equals(foo, bar)
  const expectFalseSecond = equals(foo, baz)

  expect(expectTrue).toBeTrue()
  expect(expectFalseFirst).toBeFalse()
  expect(expectFalseSecond).toBeFalse()
})

test('with array of objects', () => {
  const list1 = [ { a : 1 }, [ { b : 2 } ] ]
  const list2 = [ { a : 1 }, [ { b : 2 } ] ]
  const list3 = [ { a : 1 }, [ { b : 3 } ] ]

  expect(equals(list1, list2)).toBeTrue()
  expect(equals(list1, list3)).toBeFalse()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toBeTrue()
  expect(equals(/s/, /d/)).toBeFalse()
  expect(equals(/a/gi, /a/gi)).toBeTrue()
  expect(equals(/a/gim, /a/gim)).toBeTrue()
  expect(equals(/a/gi, /a/i)).toBeFalse()
})

test('not a number', () => {
  expect(equals([ NaN ], [ NaN ])).toBeTrue()
})

test('new number', () => {
  expect(equals(new Number(0), new Number(0))).toBeTrue()
  expect(equals(new Number(0), new Number(1))).toBeFalse()
  expect(equals(new Number(1), new Number(0))).toBeFalse()
})

test('new string', () => {
  expect(equals(new String(''), new String(''))).toBeTrue()
  expect(equals(new String(''), new String('x'))).toBeFalse()
  expect(equals(new String('x'), new String(''))).toBeFalse()
  expect(equals(new String('foo'), new String('foo'))).toBeTrue()
  expect(equals(new String('foo'), new String('bar'))).toBeFalse()
  expect(equals(new String('bar'), new String('foo'))).toBeFalse()
})

test('new Boolean', () => {
  expect(equals(new Boolean(true), new Boolean(true))).toBeTrue()
  expect(equals(new Boolean(false), new Boolean(false))).toBeTrue()
  expect(equals(new Boolean(true), new Boolean(false))).toBeFalse()
  expect(equals(new Boolean(false), new Boolean(true))).toBeFalse()
})

test('new Error', () => {
  expect(equals(new Error('XXX'), {})).toBeFalse()
  expect(equals(new Error('XXX'), new TypeError('XXX'))).toBeFalse()
  expect(equals(new Error('XXX'), new Error('YYY'))).toBeFalse()
  expect(equals(new Error('XXX'), new Error('XXX'))).toBeTrue()
  expect(equals(new Error('XXX'), new TypeError('YYY'))).toBeFalse()
})

test('with dates', () => {
  expect(equals(new Date(0), new Date(0))).toBeTrue()
  expect(equals(new Date(1), new Date(1))).toBeTrue()
  expect(equals(new Date(0), new Date(1))).toBeFalse()
  expect(equals(new Date(1), new Date(0))).toBeFalse()
  expect(equals(new Date(0), {})).toBeFalse()
  expect(equals({}, new Date(0))).toBeFalse()
})

test('ramda spec', () => {
  expect(equals({}, {})).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 2,
  })).toBeTrue()

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    b : 3,
    a : 2,
  })).toBeTrue()

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    a : 3,
    b : 3,
  })).toBeFalse()

  expect(equals({
    a : 2,
    b : 3,
    c : 1,
  },
  {
    a : 2,
    b : 3,
  })).toBeFalse()
})

test('works with boolean tuple', () => {
  expect(equals([ true, false ], [ true, false ])).toBeTrue()
  expect(equals([ true, false ], [ true, true ])).toBeFalse()
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
  expect(equals(x, y)).toBeTrue()
})

test('works with different objects within array', () => {
  const objFirst = { a : { b : 1 } }
  const objSecond = { a : { b : 2 } }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeFalse()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalse()

  expect(equals(undefined, undefined)).toBeTrue()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([ { a : 1 }, { a : 2 } ])
  const toCompareSame = new Set([ { a : 1 }, { a : 2 }, { a : 1 } ])
  const testSet = new Set([ { a : 1 }, { a : 2 }, { a : 1 } ])
  expect(equals(toCompareSame, testSet)).toBeTruthy()
  expect(equals(toCompareDifferent, testSet)).toBeFalsy()
  expect(equalsRamda(toCompareSame, testSet)).toBeTruthy()
  expect(equalsRamda(toCompareDifferent, testSet)).toBeFalsy()
})

test('compare simple sets', () => {
  const testSet = new Set([ '2', '3', '3', '2', '1' ])
  expect(equals(new Set([ '3', '2', '1' ]), testSet)).toBeTruthy()
  expect(equals(new Set([ '3', '2', '0' ]), testSet)).toBeFalsy()
})

test('various examples', () => {
  expect(equals([ 1, 2, 3 ])([ 1, 2, 3 ])).toBeTrue()

  expect(equals([ 1, 2, 3 ], [ 1, 2 ])).toBeFalse()

  expect(equals(1, 1)).toBeTrue()

  expect(equals(1, '1')).toBeFalse()

  expect(equals({}, {})).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 2,
    a : 1,
  })).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 1,
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : false,
  },
  {
    a : 1,
    b : 1,
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 2,
    a : 1,
    c : 3,
  })).toBeFalse()

  expect(equals({
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
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 3,
    a : 1,
  })).toBeFalse()

  expect(equals({ a : { b : { c : 1 } } }, { a : { b : { c : 1 } } })).toBeTrue()

  expect(equals({ a : { b : { c : 1 } } }, { a : { b : { c : 2 } } })).toBeFalse()

  expect(equals({ a : {} }, { a : {} })).toBeTrue()

  expect(equals('', '')).toBeTrue()

  expect(equals('foo', 'foo')).toBeTrue()

  expect(equals('foo', 'bar')).toBeFalse()

  expect(equals(0, false)).toBeFalse()

  expect(equals(/\s/g, null)).toBeFalse()

  expect(equals(null, null)).toBeTrue()

  expect(equals(false)(null)).toBeFalse()
})

test('with custom functions', () => {
  function foo(){
    return 1
  }
  foo.prototype.toString = () => ''
  const result = equals(foo, foo)

  expect(result).toBeTrue()
})

test('with classes', () => {
  class Foo{}
  const foo = new Foo()
  const result = equals(foo, foo)

  expect(result).toBeTrue()
})

test('with negative zero', () => {
  expect(equals(-0, -0)).toBeTrue()
  expect(equals(-0, 0)).toBeFalse()
  expect(equals(0, 0)).toBeTrue()
  expect(equals(-0, 1)).toBeFalse()
})

const possibleInputs = variousTypes

describe('brute force', () => {
  compareCombinations({
    fn          : equals,
    fnRamda     : equalsRamda,
    firstInput  : possibleInputs,
    secondInput : possibleInputs,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 5,
          "SHOULD_NOT_THROW": 4,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 289,
        }
      `)
    },
  })
})
