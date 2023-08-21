const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const testObj = { a : 1 }

const last = [
  {
    fn : () => {
      R.over(
        R.lensProp('a'), R.inc, testObj
      )
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.over(
        Ramda.lensProp('a'), Ramda.inc, testObj
      )
    },
    label : 'Ramda',
  },
]

module.exports = last
