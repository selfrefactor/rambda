const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const testObj = { a : 1 }

const last = [
  {
    label : 'Rambda',
    fn    : () => {
      R.over(
        R.lensProp('a'), R.inc, testObj
      )
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.over(
        Ramda.lensProp('a'), Ramda.inc, testObj
      )
    },
  },
]

module.exports = last
