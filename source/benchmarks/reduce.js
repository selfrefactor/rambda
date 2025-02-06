const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const fn = (acc, value) => acc + value
const holder = [1, 2, 3]
const acc = ''

const reduce = [
  {
    label: 'Rambda',
    fn: () => {
      R.reduce(fn, acc, holder)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.reduce(fn, acc, holder)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.reduce(holder, fn, acc)
    },
  },
]

module.exports = reduce
