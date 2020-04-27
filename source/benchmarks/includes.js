const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const str = 'more is less'

const includes = [
  {
    label : 'Rambda',
    fn    : () => {
      R.includes('less')(str)
      R.includes('more', str)
      R.includes('foo', str)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.includes('less')(str)
      Ramda.includes('more', str)
      Ramda.includes('foo', str)
    },
  },
]

module.exports = includes
