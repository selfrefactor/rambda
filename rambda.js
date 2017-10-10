import helper from './modules/internal/helper'
import mathHelper from './modules/internal/mathHelper'
import oppositeHelper from './modules/internal/oppositeHelper'
import propHelper from './modules/internal/propHelper'
import simpleHelper from './modules/internal/simpleHelper'

export const add = mathHelper('+')
export { default as addIndex } from './modules/addIndex'
export { default as adjust } from './modules/adjust'
export { default as all } from './modules/all'
export { default as allPass } from './modules/allPass'
export { default as anyPass } from './modules/anyPass'
export const always = x => () => x
export { default as any } from './modules/any'
export { default as append } from './modules/append'
export { default as both } from './modules/both'
export const complement = fn => input => !fn(input)
export { default as compose } from './modules/compose'
export const concat = oppositeHelper('concat')
export { default as contains } from './modules/contains'
export { default as curry } from './modules/curry'
export { default as dec } from './modules/dec'
export { default as defaultTo } from './modules/defaultTo'
export const divide = mathHelper('/')
export { default as drop } from './modules/drop'
export { default as dropLast } from './modules/dropLast'
export { default as either } from './modules/either'
export const endsWith = helper('endsWith')
export { default as inc } from './modules/inc'
export { default as equals } from './modules/equals'
export const F = () => false
export { default as filter } from './modules/filter'
export { default as find } from './modules/find'
export { default as findIndex } from './modules/findIndex'
export { default as flatten } from './modules/flatten'
export { default as flip } from './modules/flip'
export { default as forEach } from './modules/forEach'
export { default as has } from './modules/has'
export { default as head } from './modules/head'
export const identity = x => x
export { default as ifElse } from './modules/ifElse'
export { default as isNil } from './modules/isNil'
export const includes = helper('includes')
export { default as indexOf } from './modules/indexOf'
export { default as init } from './modules/init'
export const join = helper('join')
export { default as last } from './modules/last'
export const lastIndexOf = helper('lastIndexOf')
export const length = propHelper('length')
export { default as map } from './modules/map'
export { default as match } from './modules/match'
export { default as merge } from './modules/merge'
export const modulo = mathHelper('%')
export const multiply = mathHelper('*')
export const not = x => !x
export { default as omit } from './modules/omit'
export const padEnd = helper('padEnd')
export const padStart = helper('padStart')
export { default as partialCurry } from './modules/partialCurry'
export { default as path } from './modules/path'
export { default as pathOr } from './modules/pathOr'
export { default as pick } from './modules/pick'
export { default as pipe } from './modules/pipe'
export { default as pluck } from './modules/pluck'
export { default as prepend } from './modules/prepend'
export { default as prop } from './modules/prop'
export { default as propEq } from './modules/propEq'
export { default as range } from './modules/range'
export { default as reduce } from './modules/reduce'
export { default as reject } from './modules/reject'
export { default as repeat } from './modules/repeat'
export { default as replace } from './modules/replace'
export const reverse = simpleHelper('reverse')
export { default as sort } from './modules/sort'
export { default as sortBy } from './modules/sortBy'
export { default as split } from './modules/split'
export { default as splitEvery } from './modules/splitEvery'
export const startsWith = helper('startsWith')
export const subtract = mathHelper('-')
export const T = () => true
export { default as tap } from './modules/tap'
export { default as tail } from './modules/tail'
export { default as take } from './modules/take'
export { default as takeLast } from './modules/takeLast'
export { default as test } from './modules/test'
export { default as times } from './modules/times'
export const toLower = simpleHelper('toLowerCase')
export const toString = simpleHelper('toString')
export const toUpper = simpleHelper('toUpperCase')
export const trim = simpleHelper('trim')
export { default as type } from './modules/type'
export { default as typedPathOr } from './modules/typedPathOr'
export { default as typedDefaultTo } from './modules/typedDefaultTo'
export { default as uniq } from './modules/uniq'
export { default as update } from './modules/update'
export { default as values } from './modules/values'
