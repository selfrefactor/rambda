import { dissocPath } from './dissocPath.js'

test('simple example', () => {
  const result = dissocPath(['foo', 'bar'])({ a: 1, foo: { bar: 2 } })
  expect(result).toEqual({
    a: 1,
    foo: {},
  })
})

const testInput = {
  a: {
    b: 1,
    c: 2,
    d: { e: 3 },
  },
  f: [
    { g: 4 },
    {
      h: 5,
      i: 6,
      j: {
        k: 7,
        l: 8,
      },
    },
  ],
  m: 9,
}

test('update array', () => {
  const expected = {
    a: {
      b: 1,
      c: 2,
      d: { e: 3 },
    },
    f: [
      { g: 4 },
      {
        h: 5,
        j: {
          k: 7,
          l: 8,
        },
      },
    ],
    m: 9,
  }
  const result = dissocPath('f.1.i')(testInput)
  expect(result).toEqual(expected)
})

test('update object', () => {
  const result = dissocPath('a.b')(testInput)
  const expected = {
    a: {
      c: 2,
      d: { e: 3 },
    },
    f: [
      { g: 4 },
      {
        h: 5,
        i: 6,
        j: {
          k: 7,
          l: 8,
        },
      },
    ],
    m: 9,
  }
  expect(result).toEqual(expected)
})

test('does not try to omit inner properties that do not exist', () => {
  const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: 4,
    f: 5,
  }
  const obj2 = dissocPath(['x', 'z'])(obj1)
  expect(obj2).toEqual(obj1)
})

test('leaves an empty object when all properties omitted', () => {
  const obj1 = {
    a: 1,
    b: { c: 2 },
    d: 3,
  }
  const obj2 = dissocPath(['b', 'c'])(obj1)
  expect(obj2).toEqual({
    a: 1,
    b: {},
    d: 3,
  })
})

test('accepts empty path', () => {
  expect(
    dissocPath([])({
      a: 1,
      b: 2,
    }),
  ).toEqual({
    a: 1,
    b: 2,
  })
})

test('allow integer to be used as key for object', () => {
  expect(
    dissocPath([42])({
      42: 3,
      a: 1,
      b: 2,
    }),
  ).toEqual({
    a: 1,
    b: 2,
  })
})

test('support remove null/undefined value path', () => {
  expect(
    dissocPath(['c', 'd'])({
      a: 1,
      b: 2,
      c: null,
    }),
  ).toEqual({
    a: 1,
    b: 2,
    c: null,
  })
  expect(
    dissocPath(['c', 'd'])({
      a: 1,
      b: 2,
      c: undefined,
    }),
  ).toEqual({
    a: 1,
    b: 2,
    c: undefined,
  })

  const obj1 = {
    a: 1,
    b: 2,
  }
  expect(dissocPath(['c', 'd'])(obj1)).toEqual(obj1)
})
