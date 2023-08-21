const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const rules = [ x => typeof x === 'boolean', x => x > 20, x => x * 7 < 100 ]

const anyPass = [
  {
    fn : () => {
      R.anyPass(rules)(11)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.anyPass(rules)(11)
    },
    label : 'Ramda',
  },
]

module.exports = anyPass
