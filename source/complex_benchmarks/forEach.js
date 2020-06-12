const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const Utils = require('../../scripts/run-benchmarks/utils')

const listEmpty = [
  {
    label : 'Rambda',
    fn    : () => {
      const list = []
      const fn = Utils.Noop

      return () => R.forEach(fn, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const list = []
      const fn = Utils.Noop

      return () => Ramda.forEach(fn, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      const list = []
      const fn = Utils.Noop

      return () => _.forEach(list, fn)
    },
  },
]

const listLarge = [
  {
    label : 'Rambda',
    fn    : () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => R.forEach(fn, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => Ramda.forEach(fn, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => _.forEach(list, fn)
    },
  },
]

const objectEmpty = [
  {
    label : 'Rambda',
    fn    : () => {
      const obj = {}
      const fn = Utils.Noop

      return () => R.forEach(fn, obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const obj = {}
      const fn = Utils.Noop

      return () => Ramda.forEach(fn, obj)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      const obj = {}
      const fn = Utils.Noop

      return () => _.forEach(obj, fn)
    },
  },
]

const objectLarge = [
  {
    label : 'Rambda',
    fn    : () => {
      const LIMIT = 10000
      const obj = Utils.range(0, LIMIT).map(i => ({i}))
      const fn = Utils.Noop

      return () => R.forEach(fn, obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const LIMIT = 10000
      const obj = Utils.range(0, LIMIT).map(i => ({i}))
      const fn = Utils.Noop

      return () => Ramda.forEachObjIndexed(fn, obj)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      const LIMIT = 10000
      const obj = Utils.range(0, LIMIT).map(i => ({i}))
      const fn = Utils.Noop

      return () => _.forEach(obj, fn)
    },
  },
]

module.exports = [
  {label: 'forEach#listEmpty', suites: listEmpty},
  {label: 'forEach#listLarge', suites: listLarge},
  {label: 'forEach#objectEmpty', suites: objectEmpty},
  {label: 'forEach#objectLarge', suites: objectLarge},
]
