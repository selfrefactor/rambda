const R = require('../dist/rambda.js')
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
      const result = R.allPass(rules)(11)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const result = Ramda.allPass(rules)(11)
    },
  },
]

module.exports = allPass
