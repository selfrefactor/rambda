const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const match = [
  {
    fn : () => {
      R.match(/a./g)('foo bar baz')
      R.match(/a./g, 'foo bar baz')
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.match(/a./g)('foo bar baz')
      Ramda.match(/a./g, 'foo bar baz')
    },
    label : 'Ramda',
  },
]

module.exports = match
