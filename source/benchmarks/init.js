const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, 2, 3, 4 ]

const init = [
  {
    label : 'Rambda',
    fn    : () => {
      R.init(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.init(list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.initial(list)
    },
  },
]

module.exports = init
