const _ = require('lodash')
const R = require('../../dist/rambda')
const Ramda = require('ramda')
const Utils = require('../../scripts/run-benchmarks/utils')

const listEmpty = [
  {
    label: 'Rambda',
    fn: () => {
      const list = []
      const fn = Utils.Noop

      return () => R.reduce(fn, 0, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const list = []
      const fn = Utils.Noop

      return () => Ramda.reduce(fn, 0, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const list = []
      const fn = Utils.Noop

      return () => _.reduce(list, fn, 0)
    },
  },
]

const listLarge = [
  {
    label: 'Rambda',
    fn: () => {
      const LIMIT = 100000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => R.reduce(fn, 0, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => Ramda.reduce(fn, 0, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => _.reduce(list, fn, 0)
    },
  },
]

const objectEmpty = [
  {
    label: 'Rambda',
    fn: () => {
      const obj = {}
      const fn = Utils.Noop

      return () => R.reduce(fn, 0, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const obj = {}
      const fn = Utils.Noop

      return () => _.reduce(obj, fn, 0)
    },
  },
]

const objectLarge = [
  {
    label: 'Rambda',
    fn: () => {
      const LIMIT = 10000
      const obj = {}
      Utils.range(0, LIMIT).forEach(i => (obj[i] = i))
      const fn = Utils.Noop

      return () => R.reduce(fn, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const LIMIT = 10000
      const obj = {}
      Utils.range(0, LIMIT).forEach(i => (obj[i] = i))
      const fn = Utils.Noop

      return () => _.reduce(obj, fn)
    },
  },
]

module.exports = [
  {
    label: 'reduce#listEmpty',
    suites: listEmpty,
  },
  {
    label: 'reduce#listLarge',
    suites: listLarge,
  },
  {
    label: 'reduce#objectEmpty',
    suites: objectEmpty,
  },
  {
    label: 'reduce#objectLarge',
    suites: objectLarge,
  },
]
