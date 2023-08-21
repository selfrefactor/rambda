const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, 2, 3, 4 ]

const init = [
  {
    fn : () => {
      R.init(list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.init(list)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.initial(list)
    },
    label : 'Lodash',
  },
]

module.exports = init
