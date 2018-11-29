import { compose } from './compose'
import { toLower } from './toLower'
import { prop } from './prop'
import { sortBy } from './sortBy'

test('sortBy', () => {
  const sortByNameCaseInsensitive = sortBy(
    compose(
      toLower,
      prop('name')
    )
  )
  const alice = {
    name : 'ALICE',
    age  : 101,
  }
  const bob = {
    name : 'Bob',
    age  : -10,
  }
  const clara = {
    name : 'clara',
    age  : 314.159,
  }
  const people = [ clara, bob, alice ]

  expect(sortByNameCaseInsensitive(people)).toEqual([
    alice,
    bob,
    clara,
  ])

  expect(
    sortBy(val => val.a, [ { a : 2 }, { a : 1 }, { a : 0 } ])
  ).toEqual([ { a : 0 }, { a : 1 }, { a : 2 } ])

  expect(
    sortBy(val => val.a, [ { a : 1 }, { a : 1 }, { a : 1 } ])
  ).toEqual([ { a : 1 }, { a : 1 }, { a : 1 } ])

  expect(
    sortBy(val => val.a, [ { a : 3 }, { a : 2 }, { a : 1 } ])
  ).toEqual([ { a : 1 }, { a : 2 }, { a : 3 } ])

  expect(
    sortBy(val => val.a, [ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual([ { a : 1 }, { a : 2 }, { a : 3 } ])
})
