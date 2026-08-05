import { equals } from './equals'

test('happy', () => {
  const result = equals(4)(1)
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(false)

  const foo = { a: 1 }
  const bar = { a: 2 }
  const result2 = equals(foo)(bar)
  expectTypeOf(result2).toEqualTypeOf<boolean>()
  expect(result2).toBe(false)
})

test('compare functions', () => {
  function foo() {}
  function bar() {}
  const baz = () => {}

  const expectTrue = equals(foo)(foo)
  const expectFalseFirst = equals(bar)(foo)
  const expectFalseSecond = equals(baz)(foo)

  expect(expectTrue).toBeTruthy()
  expect(expectFalseFirst).toBeFalsy()
  expect(expectFalseSecond).toBeFalsy()
})

test('with array of objects', () => {
  const list1 = [{ a: 1 }, [{ b: 2 }]]
  const list2 = [{ a: 1 }, [{ b: 2 }]]
  const list3 = [{ a: 1 }, [{ b: 3 }]]

  expect(equals(list1)(list2)).toBeTruthy()
  expect(equals(list1)(list3)).toBeFalsy()
})

test('with regex', () => {
  expect(equals(/s/)(/s/)).toBeTruthy()
  expect(equals(/s/)(/d/)).toBeFalsy()
  expect(equals(/a/gi)(/a/gi)).toBeTruthy()
  expect(equals(/a/gim)(/a/gim)).toBeTruthy()
  expect(equals(/a/gi)(/a/i)).toBeFalsy()
})

test('not a number', () => {
  expect(equals([Number.NaN])([Number.NaN])).toBeTruthy()
})

test('new number', () => {
  expect(equals(new Number(0))(new Number(0))).toBeTruthy()
  expect(equals(new Number(0))(new Number(1))).toBeFalsy()
  expect(equals(new Number(1))(new Number(0))).toBeFalsy()
})

test('new string', () => {
  expect(equals(new String(''))(new String(''))).toBeTruthy()
  expect(equals(new String(''))(new String('x'))).toBeFalsy()
  expect(equals(new String('x'))(new String(''))).toBeFalsy()
  expect(equals(new String('foo'))(new String('foo'))).toBeTruthy()
  expect(equals(new String('foo'))(new String('bar'))).toBeFalsy()
  expect(equals(new String('bar'))(new String('foo'))).toBeFalsy()
})

test('new Boolean', () => {
  expect(equals(new Boolean(true))(new Boolean(true))).toBeTruthy()
  expect(equals(new Boolean(false))(new Boolean(false))).toBeTruthy()
  expect(equals(new Boolean(true))(new Boolean(false))).toBeFalsy()
  expect(equals(new Boolean(false))(new Boolean(true))).toBeFalsy()
})

test('new Error', () => {
  expect(equals(new Error('XXX'))({} as any)).toBeFalsy()
  expect(equals(new Error('XXX'))(new TypeError('XXX'))).toBeFalsy()
  expect(equals(new Error('XXX'))(new Error('YYY'))).toBeFalsy()
  expect(equals(new Error('XXX'))(new Error('XXX'))).toBeTruthy()
  expect(equals(new Error('XXX'))(new TypeError('YYY'))).toBeFalsy()
})

test('with dates', () => {
  expect(equals(new Date(0))(new Date(0))).toBeTruthy()
  expect(equals(new Date(1))(new Date(1))).toBeTruthy()
  expect(equals(new Date(0))(new Date(1))).toBeFalsy()
  expect(equals(new Date(1))(new Date(0))).toBeFalsy()
  expect(equals(new Date(0))({} as any)).toBeFalsy()
  expect(equals({})(new Date(0))).toBeFalsy()
})

test('ramda spec', () => {
  expect(equals({})({})).toBeTruthy()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      })({
        a: 1,
        b: 2,
      }),
     )
  .toBeTruthy()

  expect(
    equals(
      {
        a: 2,
        b: 3,
      })(
      {
        a: 2,
        b: 3,
      } as any
    )
  ).toBeTruthy()

  expect(
    equals(
      {
        a: 2,
        b: 3,
      })(
      {
        a: 3,
        b: 3,
      } as any
    ),
  ).toBeFalsy()

  expect(
    equals(
      {
        a: 2,
        b: 3,
        c: 1,
      })(
      {
        a: 2,
        b: 3,
      } as any
    ))
  .toBeFalsy()
})

test('works with boolean tuple', () => {
  expect(equals([true, false])([true, false])).toBeTruthy()
  expect(equals([true, false])([true, true])).toBeFalsy()
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
  expect(equals(x)(y)).toBeTruthy()
})

test('works with different objects within array', () => {
  const objFirst = { a: { b: 1 } }
  const objSecond = { a: { b: 2 } }

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equals(x)(y)).toBeFalsy()
})

test('works with undefined as second argument', () => {
  expect(equals(1)(undefined as any)).toBeFalsy()
  expect(equals(undefined)(undefined)).toBeTruthy()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([{ a: 1 }, { a: 2 }])
  const toCompareSame = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  const testSet = new Set([{ a: 1 }, { a: 2 }, { a: 1 }])
  expect(equals(toCompareSame)(testSet)).toBeTruthy()
  expect(equals(toCompareDifferent)(testSet)).toBeFalsy()
})

test('compare simple sets', () => {
  const testSet = new Set(['2', '3', '3', '2', '1'])
  expect(equals(new Set(['3', '2', '1']))(testSet)).toBeTruthy()
  expect(equals(new Set(['3', '2', '0']))(testSet)).toBeFalsy()
})

test('various examples', () => {
  expect(equals([1, 2, 3])([1, 2, 3])).toBeTruthy()
  expect(equals([1, 2, 3])([1, 2])).toBeFalsy()
  expect(equals({})({})).toBeTruthy()
})
