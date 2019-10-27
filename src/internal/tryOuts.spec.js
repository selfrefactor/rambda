const { runTests } = require('rambdax')
const T = require('./tryOuts.js')

const isNumberData = [
  { ok : 1 },
  { ok : -1 },
  { ok : -1.1 },
  { fail : null },
  { fail : {} },
  { fail : new Error('foo') },
]

runTests({
  label : 'is.number.b',
  data  : isNumberData,
  fn    : T.isNumberB,
})

runTests({
  label : 'is.number.c',
  data  : isNumberData,
  fn    : T.isNumberC,
})
