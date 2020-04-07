const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const testObj = { a: 1 }

const last = [
  {
    label : 'Rambda',
    fn    : () => {
      R.set(R.lensProp('a'), 2, testObj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.set(Ramda.lensProp('a'), 2, testObj)
    },
  },
]

module.exports = last
