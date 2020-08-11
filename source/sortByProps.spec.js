import { sortByProps } from './sortByProps'

const list = [ { a : { b : 3 } }, { a : { b : 2 } }, { a : { b : 1 } } ]
const sorted = [ { a : { b : 1 } }, { a : { b : 2 } }, { a : { b : 3 } } ]

test('wrong paths are ignored', () => {
  expect(sortByProps([ 'foo.bar', 'a.c', 'a.b', 'a.d' ], list)).toEqual(sorted)
})

test('skip sort when path results are equal', () => {
  const input = [
    {
      a : {
        b : 0,
        c : 2,
      },
    },
    {
      a : {
        b : 0,
        c : 1,
      },
    },
  ]
  expect(sortByProps([ 'a.b', 'a.d' ], input)).toEqual(input)
})

test('when list is already sorted', () => {
  const input = [
    {
      a : {
        b : 0,
        c : 1,
      },
    },
    {
      a : {
        b : 0,
        c : 2,
      },
    },
  ]
  expect(sortByProps([ 'a.b', 'a.c' ])(input)).toEqual(input)
})
