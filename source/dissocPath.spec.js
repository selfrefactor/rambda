const assert = require('node:assert')
import { dissocPath } from './dissocPath.js'

test('simple example', () => {
  expect(dissocPath(['foo', 'bar'], { a: 1, foo: { bar: 2 } })).toEqual({
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
  const result = dissocPath('f.1.i', testInput)
  expect(result).toEqual(expected)
})

test('update object', () => {
  const result = dissocPath('a.b', testInput)
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
  const obj2 = dissocPath(['x', 0, 'z'], obj1)
	expect(obj2).toEqual({
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: 4,
    f: 5,
  })
  // Note: reference equality below!
  assert.strictEqual(obj2.a, obj1.a)
  assert.strictEqual(obj2.b, obj1.b)
  assert.strictEqual(obj2.f, obj1.f)
})

test('leaves an empty object when all properties omitted', () => {
  const obj1 = {
    a: 1,
    b: { c: 2 },
    d: 3,
  }
  const obj2 = dissocPath(['b', 'c'], obj1)
  expect(obj2).toEqual({
    a: 1,
    b: {},
    d: 3,
  })
})

test('leaves an empty array when all indexes are omitted', () => {
  const obj1 = {
    a: 1,
    b: [2],
    d: 3,
  }
  const obj2 = dissocPath(['b', 0], obj1)
  expect(obj2).toEqual({
    a: 1,
    b: [],
    d: 3,
  })
})

test('accepts empty path', () => {
  expect(
    dissocPath([], {
      a: 1,
      b: 2,
    })).toEqual({
      a: 1,
      b: 2,
    })
})

test('allow integer to be used as key for object', () => {
  expect(
    dissocPath([42], {
      42: 3,
      a: 1,
      b: 2,
    })).toEqual({
      a: 1,
      b: 2,
    })
})

test('support remove null/undefined value path', () => {
  expect(
    dissocPath(['c', 'd'], {
      a: 1,
      b: 2,
      c: null,
    })).toEqual(
    {
      a: 1,
      b: 2,
      c: null,
    },
  )
  expect(
    dissocPath(['c', 'd'], {
      a: 1,
      b: 2,
      c: undefined,
    })).toEqual(
    {
      a: 1,
      b: 2,
      c: undefined,
    }
  )

  const obj1 = {
    a: 1,
    b: 2,
  }
  const obj2 = dissocPath(['c', 'd'], obj1)

	expect(obj2).toEqual(obj1)
  // NOTE: commented out on purpose
  // assert.notStrictEqual(obj2, obj1)
})
