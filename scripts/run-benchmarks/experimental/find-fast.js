const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')
const Utils = require('../utils.js')

const LIMIT = 10000

const lodash = {
  label : 'Lodash',
  fn    : () => {
    const fn = Utils.F
    const list = Utils.range(0, LIMIT)

    _.find(list, fn)
  },
}

const rambda = {
  label : 'Rambda',
  fn    : () => {
    const fn = Utils.F
    const list = Utils.range(0, LIMIT)

    R.find(fn, list)
  },
}

const ramda = {
  label : 'Ramda',
  fn    : () => {
    const fn = Utils.F
    const list = Utils.range(0, LIMIT)

    Ramda.find(fn, list)
  },
}

module.exports = [ rambda, ramda, lodash ]
