'use strict'

Object.defineProperty(exports, '__esModule', { value : true })

function helper (method, x, y) {
  if (x === undefined) {
    return function (xHolder, yHolder) {
      return helper(method, xHolder, yHolder)
    }
  } else if (y === undefined) {
    return function (yHolder) {
      return helper(method, x, yHolder)
    }
  }
  if (y[ method ] !== undefined) {
    return y[ method ](x)
  }
}

function curry (fn) {
  return function (x, y) {
    if (y === undefined) {
      return function (yHolder) {
        return fn(x, yHolder)
      }
    }

    return fn(x, y)
  }
}

function curryThree (fn) {
  return function (x, y, z) {
    if (y === undefined) {
      const helper = function helper (yHolder, zHolder) {
        return fn(x, yHolder, zHolder)
      }

      return curry(helper)
    } else if (z === undefined) {
      return function (zHolder) {
        return fn(x, y, zHolder)
      }
    }

    return fn(x, y, z)
  }
}

function mathHelper (operation, x, y) {
  switch (operation) {

  case '+':
    return x + y
  case '-':
    return x - y
  case '/':
    return x / y
  case '*':
    return x * y
  case '%':
    return x % y

  }
}

const mathHelper$1 = curryThree(mathHelper)

function oppositeHelper (method, x, y) {
  if (x === undefined) {
    return function (xHolder, yHolder) {
      return oppositeHelper(method, xHolder, yHolder)
    }
  } else if (y === undefined) {
    return function (yHolder) {
      return oppositeHelper(method, x, yHolder)
    }
  }
  if (x[ method ] !== undefined) {
    return x[ method ](y)
  }
}

function propHelper (method, x) {
  if (x === undefined) {
    return function (xHolder) {
      return propHelper(method, xHolder)
    }
  }

  return x[ method ]
}

function simpleHelper (method, x) {
  if (x === undefined) {
    return function (xHolder) {
      return simpleHelper(method, xHolder)
    }
  }
  if (x[ method ] !== undefined) {
    return x[ method ]()
  }
}

function addIndex (functor) {
  return function (fn) {
    let cnt = 0
    const newFn = function newFn () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[ _key2 ] = arguments[ _key2 ]
      }

      return fn.apply(null, [].concat(args, [ cnt++ ]))
    }

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[ _key - 1 ] = arguments[ _key ]
    }

    return functor.apply(null, [ newFn ].concat(rest))
  }
}

function adjust (fn, index, arr) {
  const clone = arr.concat()

  return clone.map((val, key) => {
    if (key === index) {
      return fn(arr[ index ])
    }

    return val
  })
}

const adjust$1 = curryThree(adjust)

function filterObject (fn, obj) {
  const willReturn = {}
  for (const prop in obj) {
    if (fn(obj[ prop ])) {
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

function filter (fn, arr) {
  if (arr.length === undefined) {
    return filterObject(fn, arr)
  }
  let index = -1
  let resIndex = 0
  const len = arr.length
  const willReturn = []

  while (++index < len) {
    const value = arr[ index ]
    if (fn(value)) {
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}

const filter$1 = curry(filter)

function all (condition, arr) {
  if (arguments.length === 1) {
    return function (arrHolder) {
      return all(condition, arrHolder)
    }
  }

  return filter$1(condition, arr).length === arr.length
}

function any (fn, arr) {
  let counter = 0
  while (counter < arr.length) {
    if (fn(arr[ counter ])) {
      return true
    }
    counter++
  }

  return false
}

const any$1 = curry(any)

function allPass (conditions, x) {
  if (arguments.length === 1) {
    return function (xHolder) {
      return allPass(conditions, xHolder)
    }
  }

  return !any$1(condition => !condition(x))(conditions)
}

function anyPass (conditions, x) {
  if (arguments.length === 1) {
    return function (xHolder) {
      return anyPass(conditions, xHolder)
    }
  }

  return any$1(condition => condition(x))(conditions)
}

function append (val, arr) {
  const clone = arr.concat()
  clone.push(val)

  return clone
}

const append$1 = curry(append)

function both (x, y) {
  return function (input) {
    return x(input) && y(input)
  }
}

const both$1 = curry(both)

//Taken from https://github.com/getify/Functional-Light-JS/blob/master/ch4.md
function compose () {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[ _key ] = arguments[ _key ]
  }

  return function (result) {
    const list = fns.slice()

    while (list.length > 0) {
      result = list.pop()(result)
    }

    return result
  }
}

const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
  return typeof obj
} : function (obj) {
  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
}

const toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[ i ] = arr[ i ] }

    return arr2
  }

  return Array.from(arr)
}

function type (a) {
  const typeOf = typeof a === 'undefined' ? 'undefined' : _typeof(a)
  if (a === null) {
    return 'Null'
  } else if (a === undefined) {
    return 'Undefined'
  } else if (typeOf === 'boolean') {
    return 'Boolean'
  } else if (typeOf === 'number') {
    return 'Number'
  } else if (typeOf === 'string') {
    return 'String'
  } else if (Array.isArray(a)) {
    return 'Array'
  } else if (a instanceof RegExp) {
    return 'RegExp'
  }

  const asStr = a.toString()

  if (asStr.startsWith('async')) {
    return 'Async'
  } else if (asStr === '[object Promise]') {
    return 'Promise'
  } else if (asStr.includes('function') || asStr.includes('=>')) {
    return 'Function'
  }

  return 'Object'
}

function equals (a, b) {
  if (a === b) {
    return true
  }
  const aType = type(a)
  if (aType !== type(b)) {
    return false
  }

  if (aType === 'Array') {
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    return aClone.sort().toString() === bClone.sort().toString()
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a)
    if (aKeys.length === Object.keys(b).length) {
      if (aKeys.length === 0) {
        return true
      }
      let flag = true
      aKeys.map(val => {
        if (flag) {
          const aValType = type(a[ val ])
          const bValType = type(b[ val ])
          if (aValType === bValType) {
            if (aValType === 'Object') {
              if (Object.keys(a[ val ]).length === Object.keys(b[ val ]).length) {
                if (Object.keys(a[ val ]).length !== 0) {
                  if (!equals(a[ val ], b[ val ])) {
                    flag = false
                  }
                }
              } else {
                flag = false
              }
            } else if (!equals(a[ val ], b[ val ])) {
              flag = false
            }
          } else {
            flag = false
          }
        }
      })

      return flag
    }
  }

  return false
}

const equals$1 = curry(equals)

function contains (val, arr) {
  let index = -1
  let flag = false
  while (++index < arr.length && !flag) {
    if (equals$1(arr[ index ], val)) {
      flag = true
    }
  }

  return flag
}

const contains$1 = curry(contains)

//taken from the last comment of https://gist.github.com/mkuklis/5294248

function curry$1 (f) {
  const a = arguments.length > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : []

  return function () {
    for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
      p[ _key ] = arguments[ _key ]
    }

    return function (o) {
      return o.length >= f.length ? f.apply(undefined, toConsumableArray(o)) : curry$1(f, o)
    }([].concat(toConsumableArray(a), p))
  }
}

const dec = function (x) {
  return x - 1
}

function defaultTo (defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return function (inputArgumentHolder) {
      return defaultTo(defaultArgument, inputArgumentHolder)
    }
  }

  return inputArgument === undefined || !(type(inputArgument) === type(defaultArgument)) ? defaultArgument : inputArgument
}

function drop (dropNumber, a) {
  return a.slice(dropNumber)
}

const drop$1 = curry(drop)

function dropLast (dropNumber, a) {
  return a.slice(0, -dropNumber)
}

const dropLast$1 = curry(dropLast)

function either (x, y) {
  return function (input) {
    return x(input) || y(input)
  }
}

const either$1 = curry(either)

const inc = function (x) {
  return x + 1
}

function find (fn, arr) {
  return arr.find(fn)
}

const find$1 = curry(find)

function findIndex (fn, arr) {
  const length = arr.length
  let index = -1

  while (++index < length) {
    if (fn(arr[ index ])) {
      return index
    }
  }

  return -1
}

const findIndex$1 = curry(findIndex)

function flatten (arr, willReturn) {
  willReturn = willReturn === undefined ? [] : willReturn

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[ i ])) {
      flatten(arr[ i ], willReturn)
    } else {
      willReturn.push(arr[ i ])
    }
  }

  return willReturn
}

function flipExport (fn) {
  return function () {
    for (var _len = arguments.length, input = Array(_len), _key = 0; _key < _len; _key++) {
      input[ _key ] = arguments[ _key ]
    }

    if (input.length === 1) {
      return function (holder) {
        return fn(holder, input[ 0 ])
      }
    } else if (input.length === 2) {
      return fn(input[ 1 ], input[ 0 ])
    }

    return undefined
  }
}

function flip (fn) {
  return flipExport(fn)
}

function has (prop, obj) {
  return obj[ prop ] !== undefined
}

const has$1 = curry(has)

function head (a) {
  if (typeof a === 'string') {
    return a[ 0 ] || ''
  }

  return a[ 0 ]
}

function ifElse (conditionFn, ifFn, elseFn) {
  return function (input) {
    if (conditionFn(input) === true) {
      return ifFn(input)
    }

    return elseFn(input)
  }
}

const ifElse$1 = curryThree(ifElse)

function indexOf (x, arr) {
  let index = -1
  const length = arr.length

  while (++index < length) {
    if (arr[ index ] === x) {
      return index
    }
  }

  return -1
}

const indexOf$1 = curry(indexOf)

function baseSlice (array, start, end) {
  let index = -1
  let length = array.length

  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : end - start >>> 0
  start >>>= 0

  const result = Array(length)
  while (++index < length) {
    result[ index ] = array[ index + start ]
  }

  return result
}

function init (a) {
  if (typeof a === 'string') {
    return a.slice(0, -1)
  }

  return a.length ? baseSlice(a, 0, -1) : []
}

function last (a) {
  if (typeof a === 'string') {
    return a[ a.length - 1 ] || ''
  }

  return a[ a.length - 1 ]
}

function mapObject (fn, obj) {
  const willReturn = {}
  for (const prop in obj) {
    willReturn[ prop ] = fn(obj[ prop ])
  }

  return willReturn
}

function map (fn, arr) {
  if (arr.length === undefined) {
    return mapObject(fn, arr)
  }
  let index = -1
  const length = arr.length
  const willReturn = Array(length)

  while (++index < length) {
    willReturn[ index ] = fn(arr[ index ])
  }

  return willReturn
}

const map$1 = curry(map)

function match (regex, str) {
  const willReturn = str.match(regex)

  return willReturn === null ? [] : willReturn
}

const match$1 = curry(match)

function merge (obj, newProps) {
  return Object.assign({}, obj, newProps)
}

const merge$1 = curry(merge)

function omit (keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return omit(keys, objHolder)
    }
  }
  if (obj === undefined || obj === null) {
    return undefined
  }
  if (typeof keys === 'string') {
    keys = keys.split(',').map(x => x.trim())
  }

  const willReturn = {}
  for (const key in obj) {
    if (!keys.includes(key)) {
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}

function partialCurry (fn) {
  const inputArguments = arguments.length > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : {}

  return function (inputArgumentsHolder) {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((resolve, reject) => {
        fn(merge$1(inputArgumentsHolder, inputArguments)).then(resolve).catch(reject)
      })
    }

    return fn(merge$1(inputArgumentsHolder, inputArguments))
  }
}

function path (pathArr, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return path(pathArr, objHolder)
    }
  }
  if (obj === null || obj === undefined) {
    return undefined
  }
  let holder = obj
  let counter = 0
  if (typeof pathArr === 'string') {
    pathArr = pathArr.split('.')
  }
  while (counter < pathArr.length) {
    if (holder === null || holder === undefined) {
      return undefined
    }
    holder = holder[ pathArr[ counter ] ]
    counter++
  }

  return holder
}

function pick (keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return pick(keys, objHolder)
    }
  }
  if (!(type(obj) === 'Object')) {
    return undefined
  }
  if (type(keys) === 'String') {
    keys = keys.split(',').map(x => x.trim())
  }

  const willReturn = {}
  let counter = 0
  while (counter < keys.length) {
    if (keys[ counter ] in obj) {
      willReturn[ keys[ counter ] ] = obj[ keys[ counter ] ]
    }
    counter++
  }

  return willReturn
}

function pluck (keyToPluck, arr) {
  const willReturn = []
  map$1(val => {
    if (!(val[ keyToPluck ] === undefined)) {
      willReturn.push(val[ keyToPluck ])
    }
  }, arr)

  return willReturn
}

const pluck$1 = curry(pluck)

function prepend (val, arr) {
  const clone = arr.concat()
  clone.unshift(val)

  return clone
}

const prepend$1 = curry(prepend)

function prop (key, obj) {
  return obj[ key ]
}

const prop$1 = curry(prop)

function propEq (key, val, obj) {
  return obj[ key ] === val
}

const propEq$1 = curryThree(propEq)

function range (start, end) {
  const willReturn = []
  for (let i = start; i < end; i++) {
    willReturn.push(i)
  }

  return willReturn
}

function reduce (fn, initialValue, arr) {
  return arr.reduce(fn, initialValue)
}

const reduce$1 = curryThree(reduce)

function repeat (a, num) {
  const willReturn = Array(num)

  return willReturn.fill(a)
}

const repeat$1 = curry(repeat)

function replace (regex, replacer, str) {
  return str.replace(regex, replacer)
}

const replace$1 = curryThree(replace)

function sort (fn, arr) {
  const arrClone = arr.concat()

  return arrClone.sort(fn)
}

const sort$1 = curry(sort)

function sortBy (fn, arr) {
  const arrClone = arr.concat()

  return arrClone.sort((a, b) => {
    const fnA = fn(a)
    const fnB = fn(b)

    return fnA < fnB ? -1 : fnA > fnB ? 1 : 0
  })
}

const sortBy$1 = curry(sortBy)

function split (glue, str) {
  return str.split(glue)
}

const split$1 = curry(split)

function splitEvery (num, a) {
  num = num > 1 ? num : 1

  const willReturn = []
  let counter = 0
  while (counter < a.length) {
    willReturn.push(a.slice(counter, counter += num))
  }

  return willReturn
}

const splitEvery$1 = curry(splitEvery)

function tap (fn, input) {
  fn(input)

  return input
}

const tap$1 = curry(tap)

function tail (arr) {
  return drop$1(1, arr)
}

function take (takeNumber, a) {
  if (a === undefined) {
    return function (holder) {
      return take(takeNumber, holder)
    }
  } else if (typeof a === 'string') {
    return a.slice(0, takeNumber)
  }

  return baseSlice(a, 0, takeNumber)
}

const take$1 = curry(take)

function takeLast (takeNumber, a) {
  const len = a.length
  takeNumber = takeNumber > len ? len : takeNumber

  if (typeof a === 'string') {
    return a.slice(len - takeNumber)
  }
  takeNumber = len - takeNumber

  return baseSlice(a, takeNumber, len)
}

const takeLast$1 = curry(takeLast)

function test (regex, str) {
  return str.search(regex) !== -1
}

const test$1 = curry(test)

function uniq (arr) {
  let index = -1
  const willReturn = []
  while (++index < arr.length) {
    const value = arr[ index ]
    if (!contains$1(value, willReturn)) {
      willReturn.push(value)
    }
  }

  return willReturn
}

function update (index, newValue, arr) {
  const arrClone = arr.concat()

  return arrClone.fill(newValue, index, index + 1)
}

const update$1 = curryThree(update)

function values (obj) {
  const willReturn = []
  for (const key in obj) {
    willReturn.push(obj[ key ])
  }

  return willReturn
}

const add = mathHelper$1('+')
const always = function always (x) {
  return function () {
    return x
  }
}
const complement = function complement (fn) {
  return function (input) {
    return !fn(input)
  }
}
const concat = oppositeHelper('concat')
const divide = mathHelper$1('/')
const endsWith = helper('endsWith')
const F = function F () {
  return false
}
const identity = function identity (x) {
  return x
}
const includes = helper('includes')
const join = helper('join')
const lastIndexOf = helper('lastIndexOf')
const length = propHelper('length')
const modulo = mathHelper$1('%')
const multiply = mathHelper$1('*')
const not = function not (x) {
  return !x
}
const padEnd = helper('padEnd')
const padStart = helper('padStart')
const reverse = simpleHelper('reverse')
const startsWith = helper('startsWith')
const subtract = mathHelper$1('-')
const T = function T () {
  return true
}
const toLower = simpleHelper('toLowerCase')
const toString = simpleHelper('toString')
const toUpper = simpleHelper('toUpperCase')
const trim = simpleHelper('trim')

exports.add = add
exports.always = always
exports.complement = complement
exports.concat = concat
exports.divide = divide
exports.endsWith = endsWith
exports.F = F
exports.identity = identity
exports.includes = includes
exports.join = join
exports.lastIndexOf = lastIndexOf
exports.length = length
exports.modulo = modulo
exports.multiply = multiply
exports.not = not
exports.padEnd = padEnd
exports.padStart = padStart
exports.reverse = reverse
exports.startsWith = startsWith
exports.subtract = subtract
exports.T = T
exports.toLower = toLower
exports.toString = toString
exports.toUpper = toUpper
exports.trim = trim
exports.addIndex = addIndex
exports.adjust = adjust$1
exports.all = all
exports.allPass = allPass
exports.anyPass = anyPass
exports.any = any$1
exports.append = append$1
exports.both = both$1
exports.compose = compose
exports.contains = contains$1
exports.curry = curry$1
exports.dec = dec
exports.defaultTo = defaultTo
exports.drop = drop$1
exports.dropLast = dropLast$1
exports.either = either$1
exports.inc = inc
exports.equals = equals$1
exports.filter = filter$1
exports.find = find$1
exports.findIndex = findIndex$1
exports.flatten = flatten
exports.flip = flip
exports.has = has$1
exports.head = head
exports.ifElse = ifElse$1
exports.indexOf = indexOf$1
exports.init = init
exports.last = last
exports.map = map$1
exports.match = match$1
exports.merge = merge$1
exports.omit = omit
exports.partialCurry = partialCurry
exports.path = path
exports.pick = pick
exports.pluck = pluck$1
exports.prepend = prepend$1
exports.prop = prop$1
exports.propEq = propEq$1
exports.range = range
exports.reduce = reduce$1
exports.repeat = repeat$1
exports.replace = replace$1
exports.sort = sort$1
exports.sortBy = sortBy$1
exports.split = split$1
exports.splitEvery = splitEvery$1
exports.tap = tap$1
exports.tail = tail
exports.take = take$1
exports.takeLast = takeLast$1
exports.test = test$1
exports.type = type
exports.uniq = uniq
exports.update = update$1
exports.values = values
//# sourceMappingURL=rambda.cjs.js.map
