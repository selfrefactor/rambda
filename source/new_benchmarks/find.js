const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const Utils = require('../../scripts/benchmark-utils')

const SLOW_LIMIT = 1000

// @INIT_MARKER

// @MARKER - slow
const lodashSlow = {
  label : 'Lodash',
  fn    : () => {
    const list = Utils.range(0, SLOW_LIMIT)
    const fn = Utils.F
    return () => _.find(list, fn)
  }
}

const rambdaSlow = {
  label : 'Rambda',
  fn    : () => {
    const list = Utils.range(0, SLOW_LIMIT)
    const fn = Utils.F
    return () => R.find(fn, list)
  }
}

const ramdaSlow = {
  label : 'Ramda',
  fn    : () => {
    const list = Utils.range(0, SLOW_LIMIT)
    const fn = Utils.F
    return () => Ramda.find(fn, list)
  }
}

// @MARKER - fast
const lodashFast = {
  label : 'Lodash',
  fn    : () => {
    const list = []
    const fn = Utils.F
    return () => _.find(list, fn)
  }
}

const rambdaFast = {
  label : 'Rambda',
  fn    : () => {
    const list = []
    const fn = Utils.F
    return () => R.find(fn, list)
  }
}

const ramdaFast = {
  label : 'Ramda',
  fn    : () => {
    const list = []
    const fn = Utils.F
    return () => Ramda.find(fn, list)
  }
}

// module.exports = [ lodashSlow, lodashSlow, lodashSlow ]
