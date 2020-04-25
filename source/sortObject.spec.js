import { runTests } from 'helpers'

import { equals } from './equals.js'
import { sortObject } from './sortObject'

const obj = {
  c : 1,
  a : 2,
  b : 3,
}
const predicateA = (
  propA, propB, valueA, valueB
) => propA > propB ? -1 : 1
const expectationA = [ 'c', 'b', 'a' ]
const predicateB = (
  propA, propB, valueA, valueB
) => propA < propB ? -1 : 1
const expectationB = [ 'a', 'b', 'c' ]
const predicateC = (
  propA, propB, valueA, valueB
) =>
  valueA > valueB ? -1 : 1
const expectationC = [ 'b', 'a', 'c' ]

const fn = ([ predicate, expectation ]) => {
  const result = sortObject(predicate, obj)
  const sortedKeys = Object.keys(result)
  const isSameObject = equals(obj, result)

  return isSameObject && equals(sortedKeys, expectation)
}

const testData = {
  label : 'foo',
  data  : [
    { ok : [ predicateA, expectationA ] },
    { ok : [ predicateB, expectationB ] },
    { ok : [ predicateC, expectationC ] },
  ],
  fn,
}

runTests(testData)
