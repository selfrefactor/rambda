const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const rules = [
  x => typeof x === 'number',
  x => x > 10,
  x => x * 7 < 100,
]

const allPass = [
  {
    label : 'Rambda',
    fn    : () => {
      R.allPass(rules)(11)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.allPass(rules)(11)
    },
  },
]

module.exports = allPass
