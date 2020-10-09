import combinate from 'combinate'
import { evolve as evolveRamda } from 'ramda'

import { add, type } from '../rambda.js'
import { equals } from './equals.js'
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


const possibleInputs = [ null, undefined, '', 42, rules, [], [ 1 ] ]
const combinations = combinate({
  rules : possibleInputs,
  input : possibleInputs,
})
const PENDING = 'PENDING'
const RESULTS_EQUAL = 'results are equal'
const ERRORS_EQUAL = 'errors are equal'
const SHOULD_THROW = 'Rambda should throw'
const SHOULD_NOT_THROW = 'Rambda should throw'

function compareToRamda(fn, fnRamda){
  return (...inputs) => {
    let ramdaResult = PENDING
    let result = PENDING
    let ramdaError = PENDING
    let error = PENDING
    try {
      result = fn(...inputs)
    } catch (e){
      error = e.message
    }
    try {
      ramdaResult = fnRamda(...inputs)
    } catch (e){
      ramdaError = e.message
    }
    const toReturn = {
      result,
      ramdaResult,
      ramdaError,
      error,
    }
    if (result !== PENDING && equals(result, ramdaResult)){
      return {
        ...toReturn,
        ok    : true,
        label : RESULTS_EQUAL,
      }
    } else if (error !== PENDING && equals(error, ramdaError)){
      return {
        ...toReturn,
        ok    : true,
        label : ERRORS_EQUAL,
      }
    } else if (result !== PENDING){
      return {
        ...toReturn,
        ok    : false,
        label : SHOULD_THROW,
      }
    } else if (error !== PENDING){
      return {
        ...toReturn,
        ok    : false,
        label : SHOULD_NOT_THROW,
      }
    }

    return {
      ...toReturn,
      ok    : false,
      label : 'unknown',
    }
  }
}
const compareOutputs = compareToRamda(evolve, evolveRamda)

test.only('foo', () => {
  const rulesInput = []
  const iterableInput = 42
  const compared = compareOutputs(rulesInput, iterableInput)
  console.log(compared)
})

const show = x => x
const getTestTitle = (...inputs) => inputs.map(x => `${ type(x) } ${ show(x) }`).join(' | ')

combinations.forEach(({ rules: rulesInput, input: iterableInput }) => {
  test(getTestTitle(rulesInput, iterableInput), () => {
    const compared = compareOutputs(rulesInput, iterableInput)
    // expect(compared.ok).toBeTrue()
    expect({
      ...compared,
      rulesInput,
      iterableInput,
    }).toMatchSnapshot()
  })
})
