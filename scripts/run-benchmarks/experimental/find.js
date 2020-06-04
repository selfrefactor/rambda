const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const lodash = [
  {
    label : 'Lodash1',
    fn    : () => {
      const fn = R.F
      const list = R.range(0, 10000)

      _.find(list, fn)
    },
  },
  {
    label : 'Lodash2',
    fn    : () => {
      const fn = R.F
      const list = []

      _.find(list, fn)
    },
  },
]

const rambda = [
  {
    label : 'Rambda#slow',
    fn    : () => {
      const fn = R.F
      const list = Ramda.range(0, 10000)

      R.find(list, fn)
    },
  },
  {
    label : 'Rambda#fast',
    fn    : () => {
      const fn = R.F
      const list = []

      R.find(fn, list)
    },
  },
]

const ramda = [
  {
    label : 'Ramda#slow',
    fn    : () => {
      const fn = Ramda.F
      const list = Ramda.range(0, 10000)

      Ramda.find(fn, list)
    },
  },
  {
    label : 'Ramda#fast',
    fn    : () => {
      const fn = Ramda.F
      const list = []

      Ramda.find(fn, list)
    },
  },
]

const find = [
  ...rambda,
  ...ramda,
  // ...lodash,
]

module.exports = find
