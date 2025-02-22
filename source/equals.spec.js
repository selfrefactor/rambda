import { equals as equalsRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { variousTypes } from './benchmarks/_utils.js'
import { equals } from './equals.js'

test('compare functions', () => {
  function foo() {}
  function bar() {}
  const baz = () => {}

  const expectTrue = equals(foo, foo)
  const expectFalseFirst = equals(foo, bar)
  const expectFalseSecond = equals(foo, baz)

  expect(expectTrue).toBeTruthy()
  expect(expectFalseFirst).toBeFalsy()
  expect(expectFalseSecond).toBeFalsy()
})

test('with array of objects', () => {
  const list1 = [{ a: 1 }, [{ b: 2 }]]
  const list2 = [{ a: 1 }, [{ b: 2 }]]
  const list3 = [{ a: 1 }, [{ b: 3 }]]

  expect(equals(list1, list2)).toBeTruthy()
  expect(equals(list1, list3)).toBeFalsy()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toBeTruthy()
  expect(equals(/s/, /d/)).toBeFalsy()
  expect(equals(/a/gi, /a/gi)).toBeTruthy()
  expect(equals(/a/gim, /a/gim)).toBeTruthy()
  expect(equals(/a/gi, /a/i)).toBeFalsy()
})

test('not a number', () => {
  expect(equals([Number.NaN], [Number.NaN])).toBeTruthy()
})

test('new number', () => {
  expect(equals(new Number(0), new Number(0))).toBeTruthy()
  expect(equals(new Number(0), new Number(1))).toBeFalsy()
  expect(equals(new Number(1), new Number(0))).toBeFalsy()
})

test('new string', () => {
  expect(equals(new String(''), new String(''))).toBeTruthy()
  expect(equals(new String(''), new String('x'))).toBeFalsy()
  expect(equals(new String('x'), new String(''))).toBeFalsy()
  expect(equals(new String('foo'), new String('foo'))).toBeTruthy()
  expect(equals(new String('foo'), new String('bar'))).toBeFalsy()
  expect(equals(new String('bar'), new String('foo'))).toBeFalsy()
})

test('new Boolean', () => {
  expect(equals(new Boolean(true), new Boolean(true))).toBeTruthy()
  expect(equals(new Boolean(false), new Boolean(false))).toBeTruthy()
  expect(equals(new Boolean(true), new Boolean(false))).toBeFalsy()
  expect(equals(new Boolean(false), new Boolean(true))).toBeFalsy()
})

test('new Error', () => {
  expect(equals(new Error('XXX'), {})).toBeFalsy()
  expect(equals(new Error('XXX'), new TypeError('XXX'))).toBeFalsy()
  expect(equals(new Error('XXX'), new Error('YYY'))).toBeFalsy()
  expect(equals(new Error('XXX'), new Error('XXX'))).toBeTruthy()
  expect(equals(new Error('XXX'), new TypeError('YYY'))).toBeFalsy()
  expect(equals(new Error('XXX'), new Error('XXX'))).toBeTruthy()
})

test('with dates', () => {
  expect(equals(new Date(0), new Date(0))).toBeTruthy()
  expect(equals(new Date(1), new Date(1))).toBeTruthy()
  expect(equals(new Date(0), new Date(1))).toBeFalsy()
  expect(equals(new Date(1), new Date(0))).toBeFalsy()
  expect(equals(new Date(0), {})).toBeFalsy()
  expect(equals({}, new Date(0))).toBeFalsy()
})

test('ramda spec', () => {
  expect(equals({}, {})).toBeTruthy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
      },
    ),
  ).toBeTruthy()

  expect(
    equals(
      {
        a: 2,
        b: 3,
      },
      {
        a: 2,
        b: 3,
      },
    ),
  ).toBeTruthy()

  expect(
    equals(
      {
        a: 2,
        b: 3,
      },
      {
        a: 3,
        b: 3,
      },
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        a: 2,
        b: 3,
        c: 1,
      },
      {
        a: 2,
        b: 3,
      },
    ),
  ).toBeFalsy()
})

test('works with boolean tuple', () => {
  expect(equals([true, false], [true, false])).toBeTruthy()
  expect(equals([true, false], [true, true])).toBeFalsy()
})

test('works with equal objects within array', () => {
  const objFirst = {
    a: {
      b: 1,
      c: 2,
      d: [1],
    },
  }
  const objSecond = {
    a: {
      b: 1,
      c: 2,
      d: [1],
    },
  }

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equals(x, y)).toBeTruthy()
})

test('works with different objects within array', () => {
  const objFirst = { a: { b: 1 } }
  const objSecond = { a: { b: 2 } }

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equals(x, y)).toBeFalsy()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalsy()

  expect(equals(undefined, undefined)).toBeTruthy()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([{ a: 1 }, { a: 2 }])
  const toCompareSame = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  const testSet = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  expect(equals(toCompareSame, testSet)).toBeTruthy()
  expect(equals(toCompareDifferent, testSet)).toBeFalsy()
  expect(equalsRamda(toCompareSame, testSet)).toBeTruthy()
  expect(equalsRamda(toCompareDifferent, testSet)).toBeFalsy()
})

test('compare simple sets', () => {
  const testSet = new Set(['2', '3', '3', '2', '1'])
  expect(equals(new Set(['3', '2', '1']), testSet)).toBeTruthy()
  expect(equals(new Set(['3', '2', '0']), testSet)).toBeFalsy()
})

test('various examples', () => {
  expect(equals([1, 2, 3])([1, 2, 3])).toBeTruthy()

  expect(equals([1, 2, 3], [1, 2])).toBeFalsy()

  expect(equals(1, 1)).toBeTruthy()

  expect(equals(1, '1')).toBeFalsy()

  expect(equals({}, {})).toBeTruthy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
      },
    ),
  ).toBeTruthy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 1,
      },
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        a: 1,
        b: false,
      },
      {
        a: 1,
        b: 1,
      },
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
        c: 3,
      },
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        x: {
          a: 1,
          b: 2,
        },
      },
      {
        x: {
          a: 1,
          b: 2,
          c: 3,
        },
      },
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 3,
      },
    ),
  ).toBeFalsy()

  expect(equals({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } })).toBeTruthy()

  expect(equals({ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } })).toBeFalsy()

  expect(equals({ a: {} }, { a: {} })).toBeTruthy()

  expect(equals('', '')).toBeTruthy()

  expect(equals('foo', 'foo')).toBeTruthy()

  expect(equals('foo', 'bar')).toBeFalsy()

  expect(equals(0, false)).toBeFalsy()

  expect(equals(/\s/g, null)).toBeFalsy()

  expect(equals(null, null)).toBeTruthy()

  expect(equals(false)(null)).toBeFalsy()
})

test('with custom functions', () => {
  function foo() {
    return 1
  }
  foo.prototype.toString = () => ''
  const result = equals(foo, foo)

  expect(result).toBeTruthy()
})

test('with classes', () => {
  class Foo {}
  const foo = new Foo()
  const result = equals(foo, foo)

  expect(result).toBeTruthy()
})

test('with negative zero', () => {
  expect(equals(-0, -0)).toBeTruthy()
  expect(equals(-0, 0)).toBeFalsy()
  expect(equals(0, 0)).toBeTruthy()
  expect(equals(-0, 1)).toBeFalsy()
})

test('with big int', () => {
  const a = BigInt(9007199254740991)
  const b = BigInt(9007199254740991)
  const c = BigInt(7007199254740991)
  expect(equals(a, b)).toBeTruthy()
  expect(equals(a, c)).toBeFalsy()
})

describe('brute force', () => {
  compareCombinations({
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
{
  "ERRORS_MESSAGE_MISMATCH": 0,
  "ERRORS_TYPE_MISMATCH": 0,
  "RESULTS_MISMATCH": 0,
  "SHOULD_NOT_THROW": 0,
  "SHOULD_THROW": 0,
  "TOTAL_TESTS": 289,
}
`)
    },
    firstInput: variousTypes,
    fn: equals,
    fnRamda: equalsRamda,
    secondInput: variousTypes,
  })
})
