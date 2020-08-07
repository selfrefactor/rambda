import { sortByProps } from './sortByProps'

const list = [ {
  a : {
    b : 1,
    c : 2,
  },
}, {
  a : {
    b : 1,
    c : 1,
  },
}, {
  a : {
    b : 0,
    c : 3,
  },
} ]
const sorted = [ {
  a : {
    b : 0,
    c : 3,
  },
}, {
  a : {
    b : 1,
    c : 1,
  },
}, {
  a : {
    b : 1,
    c : 2,
  },
} ]

test('wrong paths are ignored', () => {
  expect(sortByProps([ 'foo.bar', 'a.b', 'a.c' ], list)).toEqual(sorted)
})
