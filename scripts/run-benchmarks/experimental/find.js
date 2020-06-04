const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const find = [
  {
    label : 'Rambda1',
    fn    : () => {
      const fn = R.F
      const list = R.range(0, 10000)

      R.find(fn, list)
    },
  },
  {
    label : 'Rambda2',
    fn    : () => {
      const fn = R.F
      const list = []

      R.find(fn, list)
    },
  },{

    label : 'Ramda1',
    fn    : () => {
      const fn = R.F
      const list = R.range(0, 10000)

      Ramda.find(fn, list)
    },
  }  ,
  {
    label : 'Ramda2',
    fn    : () => {
      const fn = R.F
      const list = []

      Ramda.find(fn, list)
    },
    },{

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

module.exports = find
