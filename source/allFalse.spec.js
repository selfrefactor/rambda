import { runTests } from 'helpers-fn'

import { allFalse } from './allFalse'

const first = { ok : [ () => 2 > 10, () => [], () => {}, null, [] ] }
const second = { fail : [ () => 2 > 10, () => [], () => ({ a : 1 }) ] }
const third = { fail : [ () => 2 > 10, () => [], true ] }

const testData = {
  label : 'foo',
  data  : [ first, second, third ],
  fn    : input => allFalse(...input),
}
runTests(testData)
