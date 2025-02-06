const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const add = [
  {
    label: 'Rambda',
    fn: () => {
      R.add(1, 1)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.add(1, 1)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.add(1, 1)
    },
  },
]

module.exports = add
