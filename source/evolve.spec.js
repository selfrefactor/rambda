import { evolve as evolveRamda } from 'ramda'

import { add, type } from '../rambda.js'
import { evolve } from './evolve'

test('happy', () => {
  const rules = {
    foo : add(1),
    bar : add(-1),
  }
  const input = {
    a   : 1,
    foo : 2,
    bar : 3,
  }
  const result = evolve(rules, input)
  expect(result).toEqual({
    a   : 1,
    foo : 3,
    bar : 2,
  })
})

test('is recursive', () => {
  const transf = {
    nested : {
      second : add(-1),
      third  : add(1),
    },
  }
  const object = {
    first  : 1,
    nested : {
      second : 2,
      third  : 3,
    },
  }
  const expected = {
    first  : 1,
    nested : {
      second : 1,
      third  : 4,
    },
  }
  const result = evolve(transf, object)
  expect(result).toEqual(expected)
})

test('ignores primitive value transformations', () => {
  const transf = {
    n : 2,
    m : 'foo',
  }
  const object = {
    n : 0,
    m : 1,
  }
  const expected = {
    n : 0,
    m : 1,
  }
  const result = evolve(transf, object)
  expect(result).toEqual(expected)
})

test('with array', () => {
  const transf = [ add(1), add(-1) ]
  const object = [ 100, 1400 ]
  const expected = [ 101, 1399 ]
  const result = evolve(transf, object)
  expect(result).toEqual(expected)
})

const rules = { a : add(1) }

const badInputs = [
  [ rules, 42 ],
  [ rules, undefined ],
  [ rules, null ],
  [ rules, '' ],
  [ '', '' ],
  [ null, null ],
  [ undefined, undefined ],
  [ undefined, [] ],
  [ null, [] ],
]

const errorInputs = [
  [ null, [ 1 ] ],
  [ undefined, [ 1 ] ],
]

describe('with bad inputs', () => {
  badInputs.forEach(([ rulesInput, iterableInput ]) => {
    it(`${ type(rulesInput) } ${ type(iterableInput) }`, () => {
      expect(evolve(rulesInput, iterableInput)).toEqual(evolveRamda(rulesInput, iterableInput))
    })
  })
})

describe('with error inputs', () => {
  errorInputs.forEach(([ rulesInput, iterableInput ]) => {
    it(`${ type(rulesInput) } ${ type(iterableInput) }`, () => {
      let ramdaError
      let error
      try {
        console.log(evolve(rulesInput, iterableInput))
      } catch (e){
        error = e
      }
      try {
        evolveRamda(rulesInput, iterableInput)
      } catch (e){
        ramdaError = e
      }
      expect(ramdaError).toBeTruthy()
      expect(error).toBeTruthy()
      expect(error).toEqual(ramdaError)
    })
  })
})
