const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const rules = [
  x => typeof x === 'boolean',
  x => x > 20,
  x => x * 7 < 100,
]

const anyPass = [
  {
    label : 'Rambda',
    fn    : () => {
      const result = R.anyPass(rules)(11)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const result = Ramda.anyPass(rules)(11)
    },
  },
]

module.exports = anyPass
