const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const num = 10
const str = 'foo'

const repeat = [
  {
    fn : () => {
      R.repeat(str, num)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.repeat(str, num)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.repeat(str, num)
    },
    label : 'Lodash',
  },
]

module.exports = repeat
