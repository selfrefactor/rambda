const R = require('../rambda')

describe('sortBy', () => {
  it('', () => {
    const sortByNameCaseInsensitive = R.sortBy(R.compose(
      R.toLower,
      R.prop('name')
    ))
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

    expect(sortByNameCaseInsensitive(people)).toEqual([ alice, bob, clara ])

    expect(R.sortBy(val => val.a, [ { a : 2 }, { a : 1 }, { a : 0 } ])).toEqual([ { a : 0 }, { a : 1 }, { a : 2 } ])

    expect(R.sortBy(val => val.a, [ { a : 1 }, { a : 1 }, { a : 1 } ])).toEqual([ { a : 1 }, { a : 1 }, { a : 1 } ])

    expect(R.sortBy(val => val.a, [ { a : 3 }, { a : 2 }, { a : 1 } ])).toEqual([ { a : 1 }, { a : 2 }, { a : 3 } ])

    expect(R.sortBy(val => val.a, [ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual([ { a : 1 }, { a : 2 }, { a : 3 } ])
  })
})
