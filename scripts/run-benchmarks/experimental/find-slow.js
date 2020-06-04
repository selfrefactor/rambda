const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')
const Utils = require('../utils.js')

const list = []
const fn = Utils.F

const lodash = {
  label : 'Lodash',
  fn    : () => _.find(list, fn),
}

const rambda = {
  label : 'Rambda',
  fn    : () => R.find(fn, list),
}

const ramda = {
  label : 'Ramda',
  fn    : () => Ramda.find(fn, list),
}

module.exports = [ rambda, ramda, lodash ]
