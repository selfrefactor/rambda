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

      return () => R.map(fn, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const list = []
      const fn = Utils.Noop

      return () => Ramda.map(fn, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const list = []
      const fn = Utils.Noop

      return () => _.map(list, fn)
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

      return () => R.map(fn, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => Ramda.map(fn, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const LIMIT = 10000
      const list = Utils.range(0, LIMIT)
      const fn = Utils.Noop

      return () => _.map(list, fn)
    },
  },
]

const objectEmpty = [
  {
    label: 'Rambda',
    fn: () => {
      const obj = {}
      const fn = Utils.Noop

      return () => R.map(fn, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const obj = {}
      const fn = Utils.Noop

      return () => Ramda.map(fn, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const obj = {}
      const fn = Utils.Noop

      return () => _.map(obj, fn)
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

      return () => R.map(fn, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const LIMIT = 10000
      const obj = {}
      Utils.range(0, LIMIT).forEach(i => (obj[i] = i))
      const fn = Utils.Noop

      return () => Ramda.mapObjIndexed(fn, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      const LIMIT = 10000
      const obj = {}
      Utils.range(0, LIMIT).forEach(i => (obj[i] = i))
      const fn = Utils.Noop

      return () => _.map(obj, fn)
    },
  },
]

module.exports = [
  {
    label: 'map#listEmpty',
    suites: listEmpty,
  },
  {
    label: 'map#listLarge',
    suites: listLarge,
  },
  {
    label: 'map#objectEmpty',
    suites: objectEmpty,
  },
  {
    label: 'map#objectLarge',
    suites: objectLarge,
  },
]
