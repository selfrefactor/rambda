import { omitPaths } from './omitPaths.js'

const object = {
  a : {
    b : {
      c : 1,
      d : 2,
    },
  },
  foo : {
    bar : 3,
    baz : 4,
  },
}

test('happy', () => {
  const result = omitPaths([ 'a.b.c', 'foo.bar' ], object)
  const curried = omitPaths([ 'a.b.c', 'foo.bar' ])
  const expected = {
    a   : { b : { d : 2 } },
    foo : { baz : 4 },
  }
  expect(result).toEqual(expected)
  expect(curried(object)).toEqual(expected)
})

test('with no matching path', () => {
  expect(omitPaths([ 'a.b.c.d.e.f', 'foo.bar.123' ], object)).toEqual(object)
})
