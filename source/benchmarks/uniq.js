const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = Array(10000).fill('').map(() => String(Math.floor(Math.random() * 1000)))

const uniq = [
  {
    label : 'Rambda',
    fn    : () => {
      R.uniq(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.uniq(list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.uniq(list)
    },
  },
]

module.exports = uniq
