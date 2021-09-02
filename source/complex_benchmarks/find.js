const _ = require('lodash')
const R = require('../../dist/rambda')
const Ramda = require('ramda')
const Utils = require('../../scripts/run-benchmarks/utils')

const lodash = {
  label: 'Lodash',
  fn: () => {
    const LIMIT = 50
    const list = Utils.range(0, LIMIT)
    const fn = (_, i) => i === LIMIT - 10

    return () => _.find(list, fn)
  },
}

const lodashSlow = {
  label: 'Lodash',
  fn: () => {
    const fn = Utils.F
    const list = Utils.range(0, 1000)

    return () => _.find(list, fn)
  },
}

const lodashFast = {
  label: 'Lodash',
  fn: () => {
    const fn = Utils.F
    const list = []

    return () => _.find(list, fn)
  },
}

const ramda = {
  label: 'Ramda',
  fn: () => {
    const LIMIT = 50
    const list = Utils.range(0, LIMIT)
    const fn = (_, i) => i === LIMIT - 10

    return () => Ramda.find(fn, list)
  },
}

const ramdaFast = {
  label: 'Ramda',
  fn: () => {
    const fn = Utils.F
    const list = []

    return () => Ramda.find(fn, list)
  },
}

const ramdaSlow = {
  label: 'Ramda',
  fn: () => {
    const fn = Utils.F
    const list = Utils.range(0, 1000)

    return () => Ramda.find(fn, list)
  },
}

const rambda = {
  label: 'Rambda',
  fn: () => {
    const LIMIT = 50
    const list = Utils.range(0, LIMIT)
    const fn = (_, i) => i === LIMIT - 10

    return () => R.find(fn, list)
  },
}

const rambdaFast = {
  label: 'Rambda',
  fn: () => {
    const fn = Utils.F
    const list = []

    return () => R.find(fn, list)
  },
}
const rambdaSlow = {
  label: 'Rambda',
  fn: () => {
    const fn = Utils.F
    const list = Utils.range(0, 1000)

    return () => R.find(fn, list)
  },
}

module.exports = [
  {
    label: 'find',
    suites: [rambda, ramda, lodash],
  },
  {
    label: 'find#slow',
    suites: [rambdaSlow, ramdaSlow, lodashSlow],
  },
  {
    label: 'find#fast',
    suites: [rambdaFast, ramdaFast, lodashFast],
  },
]
