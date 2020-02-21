import { assoc } from './assoc'
import { compose } from './compose'
import { lens } from './lens'
import { lensIndex } from './lensIndex'
import { lensPath } from './lensPath'
import { lensProp } from './lensProp'
import { over } from './over'
import { prop } from './prop'
import { set } from './set'
import { toUpper } from './toUpper'
import { view } from './view'

const alice = {
  name    : 'Alice Jones',
  address : [ '22 Walnut St', 'San Francisco', 'CA' ],
  pets    : {
    dog : 'joker',
    cat : 'batman',
  },
}

const nameLens = lens(prop('name'), assoc('name'))
const addressLens = lensProp('address')
const headLens = lensIndex(0)
const dogLens = lensPath('pets.dog')

test('view', () => {
  expect(view(nameLens, alice)).toEqual('Alice Jones')

  expect(view(dogLens, alice)).toEqual('joker')

  expect(view(headLens, alice.address)).toEqual('22 Walnut St')
})

test('over', () => {
  expect(over(
    nameLens, toUpper, alice
  )).toEqual({
    name    : 'ALICE JONES',
    address : [ '22 Walnut St', 'San Francisco', 'CA' ],
    pets    : {
      dog : 'joker',
      cat : 'batman',
    },
  })

  expect(over(
    dogLens, toUpper, alice
  )).toEqual({
    name    : 'Alice Jones',
    address : [ '22 Walnut St', 'San Francisco', 'CA' ],
    pets    : {
      dog : 'JOKER',
      cat : 'batman',
    },
  })

  expect(over(
    headLens, toUpper, alice.address
  )).toEqual([ '22 WALNUT ST', 'San Francisco', 'CA' ])
})

test('set', () => {
  expect(set(
    nameLens, 'Alice Smith', alice
  )).toEqual({
    name    : 'Alice Smith',
    address : [ '22 Walnut St', 'San Francisco', 'CA' ],
    pets    : {
      dog : 'joker',
      cat : 'batman',
    },
  })

  expect(set(
    dogLens, 'bane', alice
  )).toEqual({
    name    : 'Alice Jones',
    address : [ '22 Walnut St', 'San Francisco', 'CA' ],
    pets    : {
      dog : 'bane',
      cat : 'batman',
    },
  })

  expect(set(
    headLens, '52 Crane Ave', alice.address
  )).toEqual([ '52 Crane Ave', 'San Francisco', 'CA' ])
})

test('composed lenses', () => {
  const composedStreetLens = compose(addressLens, headLens)
  const composedDogLens = compose(lensPath('pets'), lensPath('dog'))

  expect(view(composedDogLens, alice)).toEqual(view(dogLens, alice))

  expect(view(composedStreetLens, alice)).toEqual('22 Walnut St')

  expect(over(
    composedStreetLens, toUpper, alice
  )).toEqual({
    name    : 'Alice Jones',
    address : [ '22 WALNUT ST', 'San Francisco', 'CA' ],
    pets    : {
      dog : 'joker',
      cat : 'batman',
    },
  })

  expect(set(
    composedStreetLens, '52 Crane Ave', alice
  )).toEqual({
    name    : 'Alice Jones',
    address : [ '52 Crane Ave', 'San Francisco', 'CA' ],
    pets    : {
      dog : 'joker',
      cat : 'batman',
    },
  })
})

