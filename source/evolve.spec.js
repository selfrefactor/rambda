import { evolve as evolveRamda } from 'ramda'

import { add } from '../rambda.js'
import { compareCombinations, compareToRamda } from './_internals/testUtils'
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
  const list = [ 100, 1400 ]
  const expected = [ 101, 1399 ]
  const result = evolve(transf, list)
  expect(result).toEqual(expected)
})

const rulesObject = { a : add(1) }
const rulesList = [add(1)]
const possibleIterables = [ null, undefined, '', 42, [], [ 1 ], {a: 1} ]
const possibleRules = [ ...possibleIterables, rulesList, rulesObject]

describe('R.evolve', () =>{
  compareCombinations({
    firstInput  : possibleRules,
    secondInput : possibleIterables,
    fn          : evolve,
    fnRamda     : evolveRamda,
  })
})

test.skip('foo', () => {
  const compareOutputs = compareToRamda(evolve, evolveRamda)
  
  const rulesInput = []
  const iterableInput = 42
  const compared = compareOutputs(rulesInput, iterableInput)
  console.log(compared)
})
