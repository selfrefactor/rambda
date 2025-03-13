import {equalsFn } from './equals.js'

test('compare functions', () => {
  function foo() {}
  function bar() {}
  const baz = () => {}

  const expectTrue = equalsFn(foo, foo)
  const expectFalseFirst = equalsFn(foo, bar)
  const expectFalseSecond = equalsFn(foo, baz)

  expect(expectTrue).toBeTruthy()
  expect(expectFalseFirst).toBeFalsy()
  expect(expectFalseSecond).toBeFalsy()
})

test('with array of objects', () => {
  const list1 = [{ a: 1 }, [{ b: 2 }]]
  const list2 = [{ a: 1 }, [{ b: 2 }]]
  const list3 = [{ a: 1 }, [{ b: 3 }]]

  expect(equalsFn(list1, list2)).toBeTruthy()
  expect(equalsFn(list1, list3)).toBeFalsy()
})

test('with regex', () => {
  expect(equalsFn(/s/, /s/)).toBeTruthy()
  expect(equalsFn(/s/, /d/)).toBeFalsy()
  expect(equalsFn(/a/gi, /a/gi)).toBeTruthy()
  expect(equalsFn(/a/gim, /a/gim)).toBeTruthy()
  expect(equalsFn(/a/gi, /a/i)).toBeFalsy()
})

test('not a number', () => {
  expect(equalsFn([Number.NaN], [Number.NaN])).toBeTruthy()
})

test('new number', () => {
  expect(equalsFn(new Number(0), new Number(0))).toBeTruthy()
  expect(equalsFn(new Number(0), new Number(1))).toBeFalsy()
  expect(equalsFn(new Number(1), new Number(0))).toBeFalsy()
})

test('new string', () => {
  expect(equalsFn(new String(''), new String(''))).toBeTruthy()
  expect(equalsFn(new String(''), new String('x'))).toBeFalsy()
  expect(equalsFn(new String('x'), new String(''))).toBeFalsy()
  expect(equalsFn(new String('foo'), new String('foo'))).toBeTruthy()
  expect(equalsFn(new String('foo'), new String('bar'))).toBeFalsy()
  expect(equalsFn(new String('bar'), new String('foo'))).toBeFalsy()
})

test('new Boolean', () => {
  expect(equalsFn(new Boolean(true), new Boolean(true))).toBeTruthy()
  expect(equalsFn(new Boolean(false), new Boolean(false))).toBeTruthy()
  expect(equalsFn(new Boolean(true), new Boolean(false))).toBeFalsy()
  expect(equalsFn(new Boolean(false), new Boolean(true))).toBeFalsy()
})

test('new Error', () => {
  expect(equalsFn(new Error('XXX'), {})).toBeFalsy()
  expect(equalsFn(new Error('XXX'), new TypeError('XXX'))).toBeFalsy()
  expect(equalsFn(new Error('XXX'), new Error('YYY'))).toBeFalsy()
  expect(equalsFn(new Error('XXX'), new Error('XXX'))).toBeTruthy()
  expect(equalsFn(new Error('XXX'), new TypeError('YYY'))).toBeFalsy()
  expect(equalsFn(new Error('XXX'), new Error('XXX'))).toBeTruthy()
})

test('with dates', () => {
  expect(equalsFn(new Date(0), new Date(0))).toBeTruthy()
  expect(equalsFn(new Date(1), new Date(1))).toBeTruthy()
  expect(equalsFn(new Date(0), new Date(1))).toBeFalsy()
  expect(equalsFn(new Date(1), new Date(0))).toBeFalsy()
  expect(equalsFn(new Date(0), {})).toBeFalsy()
  expect(equalsFn({}, new Date(0))).toBeFalsy()
})

test('ramda spec', () => {
  expect(equalsFn({}, {})).toBeTruthy()

  expect(
    equalsFn(
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
    equalsFn(
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
    equalsFn(
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
    equalsFn(
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
  expect(equalsFn([true, false], [true, false])).toBeTruthy()
  expect(equalsFn([true, false], [true, true])).toBeFalsy()
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
  expect(equalsFn(x, y)).toBeTruthy()
})

test('works with different objects within array', () => {
  const objFirst = { a: { b: 1 } }
  const objSecond = { a: { b: 2 } }

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equalsFn(x, y)).toBeFalsy()
})

test('works with undefined as second argument', () => {
  expect(equalsFn(1, undefined)).toBeFalsy()

  expect(equalsFn(undefined, undefined)).toBeTruthy()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([{ a: 1 }, { a: 2 }])
  const toCompareSame = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  const testSet = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  expect(equalsFn(toCompareSame, testSet)).toBeTruthy()
  expect(equalsFn(toCompareDifferent, testSet)).toBeFalsy()
  expect(equalsRamda(toCompareSame, testSet)).toBeTruthy()
  expect(equalsRamda(toCompareDifferent, testSet)).toBeFalsy()
})

test('compare simple sets', () => {
  const testSet = new Set(['2', '3', '3', '2', '1'])
  expect(equalsFn(new Set(['3', '2', '1']), testSet)).toBeTruthy()
  expect(equalsFn(new Set(['3', '2', '0']), testSet)).toBeFalsy()
})

test('various examples', () => {
  expect(equalsFn([1, 2, 3])([1, 2, 3])).toBeTruthy()

  expect(equalsFn([1, 2, 3], [1, 2])).toBeFalsy()

  expect(equalsFn(1, 1)).toBeTruthy()

  expect(equalsFn(1, '1')).toBeFalsy()

  expect(equalsFn({}, {})).toBeTruthy()

  expect(
    equalsFn(
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
    equalsFn(
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
    equalsFn(
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
    equalsFn(
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
    equalsFn(
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
    equalsFn(
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

  expect(equalsFn({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } })).toBeTruthy()

  expect(equalsFn({ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } })).toBeFalsy()

  expect(equalsFn({ a: {} }, { a: {} })).toBeTruthy()

  expect(equalsFn('', '')).toBeTruthy()

  expect(equalsFn('foo', 'foo')).toBeTruthy()

  expect(equalsFn('foo', 'bar')).toBeFalsy()

  expect(equalsFn(0, false)).toBeFalsy()

  expect(equalsFn(/\s/g, null)).toBeFalsy()

  expect(equalsFn(null, null)).toBeTruthy()

  expect(equalsFn(false)(null)).toBeFalsy()
})

test('with custom functions', () => {
  function foo() {
    return 1
  }
  foo.prototype.toString = () => ''
  const result = equalsFn(foo, foo)

  expect(result).toBeTruthy()
})

test('with classes', () => {
  class Foo {}
  const foo = new Foo()
  const result = equalsFn(foo, foo)

  expect(result).toBeTruthy()
})

test('with negative zero', () => {
  expect(equalsFn(-0, -0)).toBeTruthy()
  expect(equalsFn(-0, 0)).toBeFalsy()
  expect(equalsFn(0, 0)).toBeTruthy()
  expect(equalsFn(-0, 1)).toBeFalsy()
})

test('with big int', () => {
  const a = BigInt(9007199254740991)
  const b = BigInt(9007199254740991)
  const c = BigInt(7007199254740991)
  expect(equalsFn(a, b)).toBeTruthy()
  expect(equalsFn(a, c)).toBeFalsy()
})
