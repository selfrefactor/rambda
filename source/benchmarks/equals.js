const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const limit = 10000

const strings = Array(limit)
  .fill(null)
  .map(() => Math.floor(Math.random() * 1000))

const equals = [
  {
    label: 'Rambda',
    fn: () => {
      strings.forEach(x => R.equals(x, 'ss'))
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      strings.forEach(x => Ramda.equals(x, 'ss'))
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      strings.forEach(x => _.isEqual(x, 'ss'))
    },
  },
]

module.exports = equals
