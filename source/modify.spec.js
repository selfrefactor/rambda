import { modify as modifyRamda } from 'ramda'

import { compareCombinations, FALSY_VALUES } from './_internals/testUtils.js'
import { add } from './add.js'
import { compose } from './compose.js'
import { modify } from './modify.js'

const person = {
  name : 'foo',
  age  : 20,
}

test('happy', () => {
  expect(modify(
    'age', x => x + 1, person
  )).toEqual({
    name : 'foo',
    age  : 21,
  })
})

test('property is missing', () => {
  expect(modify(
    'age', x => x + 1, person
  )).toEqual({
    name : 'foo',
    age  : 21,
  })
})

const possibleProperties = [ ...FALSY_VALUES, 'foo', 0 ]
const possibleTransformers = [
  ...FALSY_VALUES,
  add(1),
  add('foo'),
  compose,
  String,
]
const possibleObjects = [
  ...FALSY_VALUES,
  {},
  [ 1, 2, 3 ],
  {
    a   : 1,
    foo : 2,
  },
  {
    a   : 1,
    foo : [ 1 ],
  },
  {
    a   : 1,
    foo : 'bar',
  },
]

describe('brute force', () => {
  compareCombinations({
    fn          : modify,
    fnRamda     : modifyRamda,
    firstInput  : possibleProperties,
    secondInput : possibleTransformers,
    thirdInput  : possibleObjects,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 159,
          "SHOULD_NOT_THROW": 438,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 630,
        }
      `)
    },
  })
})
