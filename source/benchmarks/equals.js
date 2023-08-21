const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const limit = 10000

const strings = Array(limit)
  .fill(null)
  .map(() => Math.floor(Math.random() * 1000))

const equals = [
  {
    fn : () => {
      strings.forEach(x => R.equals(x, 'ss'))
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      strings.forEach(x => Ramda.equals(x, 'ss'))
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      strings.forEach(x => _.isEqual(x, 'ss'))
    },
    label : 'Lodash',
  },
]

module.exports = equals
