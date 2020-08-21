import { assoc } from './assoc'
import { lens } from './lens'
import { lensIndex } from './lensIndex'
import { lensPath } from './lensPath'
import { prop } from './prop'
import { set } from './set'

const alice = {
  name    : 'Alice Jones',
  address : [ '22 Walnut St', 'San Francisco', 'CA' ],
  pets    : {
    dog : 'joker',
    cat : 'batman',
  },
}

const assocLens = lens(prop('name'), assoc('name'))
const indexLens = lensIndex(0)
const pathLens = lensPath('pets.dog')

test('assoc lens', () => {
  expect(set(
    assocLens, 'Alice Smith', alice
  )).toEqual({
    name    : 'Alice Smith',
    address : [ '22 Walnut St', 'San Francisco', 'CA' ],
    pets    : {
      dog : 'joker',
      cat : 'batman',
    },
  })
})

test('path lens', () => {
  expect(set(
    pathLens, 'bane', alice
  )).toEqual({
    name    : 'Alice Jones',
    address : [ '22 Walnut St', 'San Francisco', 'CA' ],
    pets    : {
      dog : 'bane',
      cat : 'batman',
    },
  })
})

test('index lens', () => {
  expect(set(
    indexLens, '52 Crane Ave', alice.address
  )).toEqual([
    '52 Crane Ave',
    'San Francisco',
    'CA',
  ])
})
