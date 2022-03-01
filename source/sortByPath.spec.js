import { sortByPath } from './sortByPath.js'

const list = [ { a : { b : 3 } }, { a : { b : 1 } }, { a : { b : 2 } } ]
const sorted = [ { a : { b : 1 } }, { a : { b : 2 } }, { a : { b : 3 } } ]

test('with string as path', () => {
  expect(sortByPath('a.b', list)).toEqual(sorted)
})

test('with list of strings as path', () => {
  expect(sortByPath([ 'a', 'b' ], list)).toEqual(sorted)
})

test('with string as path - curried', () => {
  expect(sortByPath('a.b')(list)).toEqual(sorted)
})

test('with list of strings as path - curried', () => {
  expect(sortByPath([ 'a', 'b' ])(list)).toEqual(sorted)
})
