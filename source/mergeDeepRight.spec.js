import { mergeDeepRight } from './mergeDeepRight.js'

const student = {
  name    : 'foo',
  age     : 10,
  contact : {
    a     : 1,
    email : 'foo@example.com',
  },
}
const teacher = {
  age     : 40,
  contact : { email : 'baz@example.com' },
  songs   : { title : 'Remains the same' },
}

test('when merging object with lists inside them', () => {
  const a = {
    a : [ 1, 2, 3 ],
    b : [ 4, 5, 6 ],
  }
  const b = {
    a : [ 7, 8, 9 ],
    b : [ 10, 11, 12 ],
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    a : [ 7, 8, 9 ],
    b : [ 10, 11, 12 ],
  }
  expect(result).toEqual(expected)
})


test('happy', () => {
  const result = mergeDeepRight(student, teacher)
  const curryResult = mergeDeepRight(student)(teacher)
  const expected = {
    age     : 40,
    name    : 'foo',
    contact : {
      a     : 1,
      email : 'baz@example.com',
    },
    songs : { title : 'Remains the same' },
  }

  expect(result).toEqual(expected)
  expect(curryResult).toEqual(expected)
})

test('issue 650', () => {
  expect(Object.keys(mergeDeepRight({ a : () => {} }, { b : () => {} }))).toEqual([
    'a',
    'b',
  ])
})

test('ramda compatible test 1', () => {
  const a = {
    w : 1,
    x : 2,
    y : { z : 3 },
  }
  const b = {
    a : 4,
    b : 5,
    c : { d : 6 },
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    w : 1,
    x : 2,
    y : { z : 3 },
    a : 4,
    b : 5,
    c : { d : 6 },
  }

  expect(result).toEqual(expected)
})

test('ramda compatible test 2', () => {
  const a = {
    a : {
      b : 1,
      c : 2,
    },
    y : 0,
  }
  const b = {
    a : {
      b : 3,
      d : 4,
    },
    z : 0,
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    a : {
      b : 3,
      c : 2,
      d : 4,
    },
    y : 0,
    z : 0,
  }

  expect(result).toEqual(expected)
})

test('ramda compatible test 3', () => {
  const a = {
    w : 1,
    x : { y : 2 },
  }
  const result = mergeDeepRight(a, { x : { y : 3 } })
  const expected = {
    w : 1,
    x : { y : 3 },
  }
  expect(result).toEqual(expected)
})

test('functions are not discarded', () => {
  const obj = { foo : () => {} }
  expect(typeof mergeDeepRight(obj, {}).foo).toBe('function')
})
