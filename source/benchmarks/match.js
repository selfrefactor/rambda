const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const match = [
  {
    label: 'Rambda',
    fn: () => {
      R.match(/a./g)('foo bar baz')
      R.match(/a./g, 'foo bar baz')
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.match(/a./g)('foo bar baz')
      Ramda.match(/a./g, 'foo bar baz')
    },
  },
]

module.exports = match
