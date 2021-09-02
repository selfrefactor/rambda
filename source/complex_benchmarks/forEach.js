const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const Utils = require('../../scripts/run-benchmarks/utils')

const listEmpty = [
  {
    label: 'Rambda',
    fn: () => {
      const list = []
      const fn = Utils.Noop

      return () => R.forEach(fn, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const list = []
      const fn = Utils.Noop

      return () => Ramda.forEach(fn, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const list = []
      const fn = Utils.Noop

      return () => _.forEach(list, fn)
    },
  },
]

const listLarge = [
  {
    label: 'Rambda',
    fn: () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => R.forEach(fn, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => Ramda.forEach(fn, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => _.forEach(list, fn)
    },
  },
]

const objectEmpty = [
  {
    label: 'Rambda',
    fn: () => {
      const obj = {}
      const fn = Utils.Noop

      return () => R.forEach(fn, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const obj = {}
      const fn = Utils.Noop

      return () => Ramda.forEach(fn, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const obj = {}
      const fn = Utils.Noop

      return () => _.forEach(obj, fn)
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

      return () => R.forEach(fn, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const LIMIT = 10000
      const obj = {}
      Utils.range(0, LIMIT).forEach(i => (obj[i] = i))
      const fn = Utils.Noop

      return () => Ramda.forEachObjIndexed(fn, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const LIMIT = 10000
      const obj = {}
      Utils.range(0, LIMIT).forEach(i => (obj[i] = i))
      const fn = Utils.Noop

      return () => _.forEach(obj, fn)
    },
  },
]

module.exports = [
  {
    label: 'forEach#empty.list',
    suites: listEmpty,
  },
  {
    label: 'forEach#large.list',
    suites: listLarge,
  },
  {
    label: 'forEach#empty.object',
    suites: objectEmpty,
  },
  {
    label: 'forEach#large.object',
    suites: objectLarge,
  },
]
