import { runTests } from 'helpers-fn'

import { allFalse } from './allFalse.js'

const happy = { ok : [ () => false, () => [], () => {}, null, false, [] ] }
const withArray = { fail : [ ...happy.ok, [ 1 ] ] }
const withObject = { fail : [ ...happy.ok, { a : 1 } ] }
const withFunction = { fail : [ ...happy.ok, () => ({ a : 1 }) ] }
const withBoolean = { fail : [ ...happy.ok, true ] }

const testData = {
  data  : [ happy, withArray, withObject, withFunction, withBoolean ],
  fn    : input => allFalse(...input),
  label : 'R.allFalse',
}
runTests(testData)
