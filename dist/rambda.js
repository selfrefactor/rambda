'use strict';

function add(a) {
  return b => Number(a) + Number(b)
}

function all(predicate) {
  return list => {
    for (let i = 0; i < list.length; i++) {
      if (!predicate(list[i])) {
        return false
      }
    }

    return true
  }
}

function allPass(predicates) {
  return input => {
    let counter = 0;
    while (counter < predicates.length) {
      if (!predicates[counter](input)) {
        return false
      }
      counter++;
    }

    return true
  }
}

function any(predicate) {
  return list => {
    let counter = 0;
    while (counter < list.length) {
      if (predicate(list[counter], counter)) {
        return true
      }
      counter++;
    }

    return false
  }
}

function anyPass(predicates) {
  return input => {
    let counter = 0;
    while (counter < predicates.length) {
      if (predicates[counter](input)) {
        return true
      }
      counter++;
    }

    return false
  }
}

const cloneList = list => Array.prototype.slice.call(list);

function append(x) {
  return list=> {
		const clone = cloneList(list);
  clone.push(x);

  return clone
	}
}

function assoc(prop, newValue) {
  return obj => Object.assign({}, obj, { [prop]: newValue })
}

function createPath(path, delimiter = '.') {
  return typeof path === 'string'
    ? path.split(delimiter).map(x => (Number.isInteger(Number(x)) ? Number(x) : x))
    : path
}

function assocPath(path, newValue) {
  return input => {
    const pathArrValue = createPath(path);
    if (pathArrValue.length === 0) {
      return newValue
    }

    const index = pathArrValue[0];
    if (pathArrValue.length > 1) {
      const nextInput =
        typeof input !== 'object' || input === null || !Object.hasOwn(input, index)
          ? {}
          : input[index];

      newValue = assocPath(
        Array.prototype.slice.call(pathArrValue, 1),
        newValue,
      )(nextInput);
    }

    return assoc(index, newValue)(input)
  }
}

function checkObjectWithSpec(conditions) {
  return input => {
    let shouldProceed = true;
    for (const prop in conditions) {
      if (!shouldProceed) {
        continue
      }
      const result = conditions[prop](input[prop]);
      if (shouldProceed && result === false) {
        shouldProceed = false;
      }
    }

    return shouldProceed
  }
}

function complement(fn) {
  return (...input) => !fn(...input)
}

function concat(x, y) {
  if (arguments.length === 1) {
    return _y => concat(x, _y)
  }

  return typeof x === 'string' ? `${x}${y}` : [...x, ...y]
}

const { isArray } = Array;

function count(predicate, list) {
  if (arguments.length === 1) {
    return _list => count(predicate, _list)
  }
  if (!isArray(list)) {
    return 0
  }

  return list.filter(x => predicate(x)).length
}

function countBy(fn, list) {
  if (arguments.length === 1) {
    return _list => countBy(fn, _list)
  }
  const willReturn = {};

  list.forEach(item => {
    const key = fn(item);
    if (!willReturn[key]) {
      willReturn[key] = 1;
    } else {
      willReturn[key]++;
    }
  });

  return willReturn
}

function isFalsy(input) {
  return input === undefined || input === null || Number.isNaN(input) === true
}

function defaultTo(defaultArgument, input) {
  if (arguments.length === 1) {
    return _input => defaultTo(defaultArgument, _input)
  }

  return isFalsy(input) ? defaultArgument : input
}

function type(input) {
  if (input === null) {
    return 'Null'
  }
  if (input === undefined) {
    return 'Undefined'
  }
  if (Number.isNaN(input)) {
    return 'NaN'
  }
  const typeResult = Object.prototype.toString.call(input).slice(8, -1);

  return typeResult === 'AsyncFunction' ? 'Promise' : typeResult
}

function _lastIndexOf(valueToFind, list) {
  if (!isArray(list)) {
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }

  const typeOfValue = type(valueToFind);
  if (!['Array', 'NaN', 'Object', 'RegExp'].includes(typeOfValue)) {
    return list.lastIndexOf(valueToFind)
  }

  const { length } = list;
  let index = length;
  let foundIndex = -1;

  while (--index > -1 && foundIndex === -1) {
    if (equals(list[index], valueToFind)) {
      foundIndex = index;
    }
  }

  return foundIndex
}

function _indexOf(valueToFind, list) {
  if (!isArray(list)) {
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }

  const typeOfValue = type(valueToFind);
  if (!['Array', 'NaN', 'Object', 'RegExp'].includes(typeOfValue)) {
    return list.indexOf(valueToFind)
  }

  let index = -1;
  let foundIndex = -1;
  const { length } = list;

  while (++index < length && foundIndex === -1) {
    if (equals(list[index], valueToFind)) {
      foundIndex = index;
    }
  }

  return foundIndex
}

function _arrayFromIterator(iter) {
  const list = [];
  let next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }

  return list
}

function _compareSets(a, b) {
  if (a.size !== b.size) {
    return false
  }

  const aList = _arrayFromIterator(a.values());
  const bList = _arrayFromIterator(b.values());

  const filtered = aList.filter(aInstance => _indexOf(aInstance, bList) === -1);

  return filtered.length === 0
}

function compareErrors(a, b) {
  if (a.message !== b.message) {
    return false
  }
  if (a.toString !== b.toString) {
    return false
  }

  return a.toString() === b.toString()
}

function parseDate(maybeDate) {
  if (!maybeDate.toDateString) {
    return [false]
  }

  return [true, maybeDate.getTime()]
}

function parseRegex(maybeRegex) {
  if (maybeRegex.constructor !== RegExp) {
    return [false]
  }

  return [true, maybeRegex.toString()]
}

function equals(a, b) {
  if (arguments.length === 1) {
    return _b => equals(a, _b)
  }

  if (Object.is(a, b)) {
    return true
  }

  const aType = type(a);

  if (aType !== type(b)) {
    return false
  }
  if (aType === 'Function') {
    return a.name === undefined ? false : a.name === b.name
  }

  if (['NaN', 'Null', 'Undefined'].includes(aType)) {
    return true
  }

  if (['BigInt', 'Number'].includes(aType)) {
    if (Object.is(-0, a) !== Object.is(-0, b)) {
      return false
    }

    return a.toString() === b.toString()
  }

  if (['Boolean', 'String'].includes(aType)) {
    return a.toString() === b.toString()
  }

  if (aType === 'Array') {
    const aClone = Array.from(a);
    const bClone = Array.from(b);

    if (aClone.toString() !== bClone.toString()) {
      return false
    }

    let loopArrayFlag = true;
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (
          aCloneInstance !== bClone[aCloneIndex] &&
          !equals(aCloneInstance, bClone[aCloneIndex])
        ) {
          loopArrayFlag = false;
        }
      }
    });

    return loopArrayFlag
  }

  const aRegex = parseRegex(a);
  const bRegex = parseRegex(b);

  if (aRegex[0]) {
    return bRegex[0] ? aRegex[1] === bRegex[1] : false
  }
  if (bRegex[0]) {
    return false
  }

  const aDate = parseDate(a);
  const bDate = parseDate(b);

  if (aDate[0]) {
    return bDate[0] ? aDate[1] === bDate[1] : false
  }
  if (bDate[0]) {
    return false
  }

  if (a instanceof Error) {
    if (!(b instanceof Error)) {
      return false
    }

    return compareErrors(a, b)
  }

  if (aType === 'Set') {
    return _compareSets(a, b)
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {
      return false
    }

    let loopObjectFlag = true;
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag) {
        const aValue = a[aKeyInstance];
        const bValue = b[aKeyInstance];

        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false;
        }
      }
    });

    return loopObjectFlag
  }

  return false
}

function includes(valueToFind, iterable) {
  if (arguments.length === 1) {
    return _iterable => includes(valueToFind, _iterable)
  }
  if (typeof iterable === 'string') {
    return iterable.includes(valueToFind)
  }
  if (!iterable) {
    throw new TypeError(`Cannot read property \'indexOf\' of ${iterable}`)
  }
  if (!isArray(iterable)) {
    return false
  }

  return _indexOf(valueToFind, iterable) > -1
}

class _Set {
  constructor() {
    this.set = new Set();
    this.items = {};
  }

  checkUniqueness(item) {
    const type$1 = type(item);
    if (['Null', 'Undefined', 'NaN'].includes(type$1)) {
      if (type$1 in this.items) {
        return false
      }
      this.items[type$1] = true;

      return true
    }
    if (!['Object', 'Array'].includes(type$1)) {
      const prevSize = this.set.size;
      this.set.add(item);

      return this.set.size !== prevSize
    }

    if (!(type$1 in this.items)) {
      this.items[type$1] = [item];

      return true
    }

    if (_indexOf(item, this.items[type$1]) === -1) {
      this.items[type$1].push(item);

      return true
    }

    return false
  }
}

function uniq(list) {
  const set = new _Set();
  const willReturn = [];
  list.forEach(item => {
    if (set.checkUniqueness(item)) {
      willReturn.push(item);
    }
  });

  return willReturn
}

function difference(a, b) {
  if (arguments.length === 1) {
    return _b => difference(a, _b)
  }

  return uniq(a).filter(aInstance => !includes(aInstance, b))
}

function differenceWithFn(fn, a) {
  return b => {
    const willReturn = [];
    const [first, second] = a.length >= b.length ? [a, b] : [b, a];

    first.forEach(item => {
      const hasItem = second.some(secondItem => fn(item, secondItem));
      if (!hasItem && _indexOf(item, willReturn) === -1) {
        willReturn.push(item);
      }
    });

    return willReturn
  }
}

function dissoc(prop, obj) {
  if (arguments.length === 1) {
    return _obj => dissoc(prop, _obj)
  }

  if (obj === null || obj === undefined) {
    return {}
  }

  const willReturn = {};
  for (const p in obj) {
    willReturn[p] = obj[p];
  }
  delete willReturn[prop];

  return willReturn
}

function _includes(x, list) {
  let index = -1;
  const { length } = list;

  while (++index < length) {
    if (String(list[index]) === String(x)) {
      return true
    }
  }

  return false
}

function omit(propsToOmit) {
  return obj => {
    if (!obj) {
      return undefined
    }

    const propsToOmitValue = createPath(propsToOmit, ',');
    const willReturn = {};

    for (const key in obj) {
      if (!_includes(key, propsToOmitValue)) {
        willReturn[key] = obj[key];
      }
    }

    return willReturn
  }
}

function path(pathInput, obj) {
  if (arguments.length === 1) {
    return _obj => path(pathInput, _obj)
  }

  if (!obj) {
    return undefined
  }
  let willReturn = obj;
  let counter = 0;

  const pathArrValue = createPath(pathInput);

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined
    }
    if (willReturn[pathArrValue[counter]] === null) {
      return undefined
    }

    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn
}

function update(index, newValue) {
  return list => {
    const clone = cloneList(list);
    if (index === -1) {
      return clone.fill(newValue, index)
    }

    return clone.fill(newValue, index, index + 1)
  }
}

function removeIndex(index, list) {
  if (index <= 0) {
    return list.slice(1)
  }
  if (index >= list.length - 1) {
    return list.slice(0, list.length - 1)
  }

  return [...list.slice(0, index), ...list.slice(index + 1)]
}

function dissocPath(pathInput) {
  return input => {
    const pathArrValue = createPath(pathInput);
    if (pathArrValue.length === 0) {
      return input
    }

    const pathResult = path(pathArrValue, input);
    if (pathResult === undefined) {
      return input
    }

    const index = pathArrValue[0];
    const condition =
      typeof input !== 'object' || input === null || !Object.hasOwn(input, index);
    if (pathArrValue.length > 1) {
      const nextInput = condition
        ? Number.isInteger(pathArrValue[1])
          ? []
          : {}
        : input[index];
      const nextPathInput = Array.prototype.slice.call(pathArrValue, 1);
      const intermediateResult = dissocPath(nextPathInput)(nextInput);
      if (isArray(input)) {
        return update(index, intermediateResult)(input)
      }

      return {
        ...input,
        [index]: intermediateResult,
      }
    }
    if (isArray(input)) {
      return removeIndex(index, input)
    }

    return omit([index])(input)
  }
}

function drop(howManyToDrop, listOrString) {
  if (arguments.length === 1) {
    return _list => drop(howManyToDrop, _list)
  }

  return listOrString.slice(howManyToDrop > 0 ? howManyToDrop : 0)
}

function dropLast(howManyToDrop, listOrString) {
  if (arguments.length === 1) {
    return _listOrString => dropLast(howManyToDrop, _listOrString)
  }

  return howManyToDrop > 0
    ? listOrString.slice(0, -howManyToDrop)
    : listOrString.slice()
}

function dropLastWhile(predicate) {
  return list => {
    if (list.length === 0) {
      return list
    }

    const toReturn = [];
    let counter = list.length;

    while (counter) {
      const item = list[--counter];
      if (!predicate(item)) {
        toReturn.push(item);
        break
      }
    }

    while (counter) {
      toReturn.push(list[--counter]);
    }

    return toReturn.reverse()
  }
}

function dropWhile(predicate) {
  return iterable => {
    const toReturn = [];
    let counter = 0;

    while (counter < iterable.length) {
      const item = iterable[counter++];
      if (!predicate(item)) {
        toReturn.push(item);
        break
      }
    }

    while (counter < iterable.length) {
      toReturn.push(iterable[counter++]);
    }

    return toReturn
  }
}

function eqBy(fn, a) {
  return b => equals(fn(a), fn(b))
}

function prop(searchProperty) {
  return obj => (obj ? obj[searchProperty] : undefined)
}

function eqProps(property, objA) {
  return objB => equals(prop(property), prop(property))
}

const { keys } = Object;

function mapObject(fn) {
  return obj => {
    let index = 0;
    const objKeys = keys(obj);
    const len = objKeys.length;
    const willReturn = {};

    while (index < len) {
      const key = objKeys[index];
      willReturn[key] = fn(obj[key], key, obj);
      index++;
    }

    return willReturn
  }
}

function evolve(rules) {
  return obj =>
    mapObject((x, prop) => {
      if (type(x) === 'Object') {
        const typeRule = type(rules[prop]);
        if (typeRule === 'Function') {
          return rules[prop](x)
        }
        if (typeRule === 'Object') {
          return evolve(rules[prop])
        }

        return x
      }
      if (type(rules[prop]) === 'Function') {
        return rules[prop](x)
      }

      return x
    })(obj)
}

function filterObject(predicate, obj) {
  const willReturn = {};

  for (const prop in obj) {
    if (predicate(obj[prop], prop, obj)) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn
}

function filterArray(predicate, list, indexed = false) {
  let index = 0;
  const len = list.length;
  const willReturn = [];

  while (index < len) {
    const predicateResult = indexed
      ? predicate(list[index], index)
      : predicate(list[index]);
    if (predicateResult) {
      willReturn.push(list[index]);
    }

    index++;
  }

  return willReturn
}

function filter(predicate, iterable) {
  if (arguments.length === 1) {
    return _iterable => filter(predicate, _iterable)
  }
  if (!iterable) {
    throw new Error('Incorrect iterable input')
  }

  if (isArray(iterable)) {
    return filterArray(predicate, iterable, false)
  }

  return filterObject(predicate, iterable)
}

function find(predicate, list) {
  if (arguments.length === 1) {
    return _list => find(predicate, _list)
  }

  let index = 0;
  const len = list.length;

  while (index < len) {
    const x = list[index];
    if (predicate(x)) {
      return x
    }

    index++;
  }
}

function findIndex(predicate, list) {
  if (arguments.length === 1) {
    return _list => findIndex(predicate, _list)
  }

  const len = list.length;
  let index = -1;

  while (++index < len) {
    if (predicate(list[index])) {
      return index
    }
  }

  return -1
}

function findLast(predicate, list) {
  if (arguments.length === 1) {
    return _list => findLast(predicate, _list)
  }

  let index = list.length;

  while (--index >= 0) {
    if (predicate(list[index])) {
      return list[index]
    }
  }

  return undefined
}

function findLastIndex(fn, list) {
  if (arguments.length === 1) {
    return _list => findLastIndex(fn, _list)
  }

  let index = list.length;

  while (--index >= 0) {
    if (fn(list[index])) {
      return index
    }
  }

  return -1
}

function flatMap(fn) {
  return list => [].concat(...list.map(fn))
}

function flatten(list, input) {
  const willReturn = input === undefined ? [] : input;

  for (let i = 0; i < list.length; i++) {
    if (isArray(list[i])) {
      flatten(list[i], willReturn);
    } else {
      willReturn.push(list[i]);
    }
  }

  return willReturn
}

function fromPairs(listOfPairs) {
  const toReturn = {};
  listOfPairs.forEach(([prop, value]) => (toReturn[prop] = value));

  return toReturn
}

function getPropertyOrDefault(defaultValue, property) {
  return obj => {
    if (!obj) {
      return defaultValue
    }

    return defaultTo(defaultValue, obj[property])
  }
}

function groupBy(groupFn, list) {
  if (arguments.length === 1) {
    return _list => groupBy(groupFn, _list)
  }

  const result = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const key = groupFn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result
}

function head(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString[0] || ''
  }

  return listOrString[0]
}

function indexOf(valueToFind) {
  return list => _indexOf(valueToFind, list)
}

function baseSlice(array, start, end) {
  let index = -1;
  let { length } = array;

  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;

  const result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result
}

function init(input) {
  if (typeof input === 'string') {
    return input.slice(0, -1)
  }

  return input.length ? baseSlice(input, 0, -1) : []
}

function _includesWith(pred, x, list) {
  let idx = 0;
  const len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true
    }

    idx += 1;
  }

  return false
}
function _filter(fn, list) {
  let idx = 0;
  const len = list.length;
  const result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }

    idx += 1;
  }

  return result
}

function innerJoin(pred, xs) {
  return ys => _filter(x => _includesWith(pred, x, ys), xs)
}

function intersection(listA, listB) {
  if (arguments.length === 1) {
    return _list => intersection(listA, _list)
  }

  return filter(x => includes(x, listA), listB)
}

function intersperse(separator, list) {
  if (arguments.length === 1) {
    return _list => intersperse(separator, _list)
  }

  let index = -1;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    if (index === len - 1) {
      willReturn.push(list[index]);
    } else {
      willReturn.push(list[index], separator);
    }
  }

  return willReturn
}

function join(glue, list) {
  if (arguments.length === 1) {
    return _list => join(glue, _list)
  }

  return list.join(glue)
}

function last(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString[listOrString.length - 1] || ''
  }

  return listOrString[listOrString.length - 1]
}

function lastIndexOf(valueToFind, list) {
  if (arguments.length === 1) {
    return _list => _lastIndexOf(valueToFind, _list)
  }

  return _lastIndexOf(valueToFind, list)
}

function map(fn) {
  return list => {
    let index = 0;
    const willReturn = Array(list.length);
    while (index < list.length) {
      willReturn[index] = fn(list[index], index);
      index++;
    }
    return willReturn
  }
}

function match(pattern, input) {
  if (arguments.length === 1) {
    return _input => match(pattern, _input)
  }

  const willReturn = input.match(pattern);

  return willReturn === null ? [] : willReturn
}

function maxBy(compareFn, x) {
  return y => (compareFn(y) > compareFn(x) ? y : x)
}

function merge(target) {
  return objectWithNewProps =>
    Object.assign({}, target || {}, objectWithNewProps || {})
}

function mergeAll(arr) {
  let willReturn = {};

  return willReturn
}

function mergeTypes(x) {
  return x
}

function minBy(compareFn, x) {
  return y => (compareFn(y) < compareFn(x) ? y : x)
}

function modifyPath(pathInput, fn) {
  return object => {
    const path$1 = createPath(pathInput);
    if (path$1.length === 1) {
      return {
        ...object,
        [path$1[0]]: fn(object[path$1[0]]),
      }
    }
    if (path(path$1)(object) === undefined) {
      return object
    }

    const val = modifyPath(Array.prototype.slice.call(path$1, 1), fn, object[path$1[0]]);
    if (val === object[path$1[0]]) {
      return object
    }

    return assoc(path$1[0], val)(object)
  }
}

function none(predicate) {
  return list => {
    for (let i = 0; i < list.length; i++) {
      if (predicate(list[i])) {
        return false
      }
    }

    return true
  }
}

function objOf(key) {
  return value => ({ [key]: value })
}

function partitionObject(predicate, iterable) {
  const yes = {};
  const no = {};
  Object.entries(iterable).forEach(([prop, value]) => {
    if (predicate(value, prop)) {
      yes[prop] = value;
    } else {
      no[prop] = value;
    }
  });

  return [yes, no]
}

function partitionArray(predicate, list, indexed = false) {
  const yes = [];
  const no = [];
  let counter = -1;

  while (counter++ < list.length - 1) {
    if (indexed ? predicate(list[counter], counter) : predicate(list[counter])) {
      yes.push(list[counter]);
    } else {
      no.push(list[counter]);
    }
  }

  return [yes, no]
}

function partition(predicate, iterable) {
  if (arguments.length === 1) {
    return listHolder => partition(predicate, listHolder)
  }
  if (!isArray(iterable)) {
    return partitionObject(predicate, iterable)
  }

  return partitionArray(predicate, iterable)
}

function pathSatisfies(fn, pathInput) {
  return obj => Boolean(fn(path(pathInput)(obj)))
}

function pick(propsToPick) {
  return input => {
    if (!input === null) {
      return undefined
    }
    const keys = createPath(propsToPick, ',');
    const willReturn = {};
    let counter = 0;

    while (counter < keys.length) {
      if (keys[counter] in input) {
        willReturn[keys[counter]] = input[keys[counter]];
      }
      counter++;
    }

    return willReturn
  }
}

function reduce(reducer, acc) {
  return list => {
    if (list == null) {
      return acc
    }
    if (!isArray(list)) {
      throw new TypeError('reduce: list must be array or iterable')
    }
    let index = 0;
    const len = list.length;

    while (index < len) {
      acc = reducer(acc, list[index], index, list);
      index++;
    }

    return acc
  }
}

function _arity(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments)
      }
    case 1:
      return function (a0) {
        return fn.apply(this, arguments)
      }
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments)
      }
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments)
      }
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments)
      }
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments)
      }
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments)
      }
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments)
      }
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments)
      }
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments)
      }
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments)
      }
    default:
      throw new Error(
        'First argument to _arity must be a non-negative integer no greater than ten',
      )
  }
}

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments))
  }
}

function pipeFn() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument')
  }

  return _arity(
    arguments[0].length,
    reduce(
      _pipe,
      arguments[0],
    )(Array.prototype.slice.call(arguments, 1, Number.POSITIVE_INFINITY)),
  )
}

function pipe(...inputs) {
  const [input, ...fnList] = inputs;

  return pipeFn(...fnList)(input)
}

function pluck(property) {
	return list => {
  const willReturn = [];

  return willReturn
}
}

function prepend(x) {
  return list=> [x].concat(list)
}

function propEq(valueToMatch, propToFind) {
  return obj => {
    if (!obj) {
      return false
    }

    return equals(valueToMatch, prop(propToFind))
  }
}

function propSatisfies(predicate, property) {
  return obj => predicate(prop(property))
}

function reject(predicate) {
  return list => filter(x => !predicate(x), list)
}

function repeat(timesToRepeat) {
  return x => Array(timesToRepeat).fill(x)
}

function replace(pattern, replacer) {
  return str => str.replace(pattern, replacer)
}

function replaceItemAtIndex(index, replaceFn) {
  return list => {
    const actualIndex = index < 0 ? list.length + index : index;
    if (index >= list.length || actualIndex < 0) {
      return list
    }

    const clone = cloneList(list);
    clone[actualIndex] = replaceFn(clone[actualIndex]);

    return clone
  }
}

function sort(sortFn) {
  return list => cloneList(list).sort(sortFn)
}

function sortBy(sortFn) {
  return list => {
    const clone = cloneList(list);

    return clone.sort((a, b) => {
      const aSortResult = sortFn(a);
      const bSortResult = sortFn(b);

      if (aSortResult === bSortResult) {
        return 0
      }

      return aSortResult < bSortResult ? -1 : 1
    })
  }
}

function sortHelper(a, b, listOfSortingFns) {
  let result = 0;
  let i = 0;
  while (result === 0 && i < listOfSortingFns.length) {
    result = listOfSortingFns[i](a, b);
    i += 1;
  }

  return result
}

function sortWith(listOfSortingFns) {
	return list => {
  if (Array.isArray(list) === false) {
    return []
  }

  const clone = list.slice();
  clone.sort((a, b) => sortHelper(a, b, listOfSortingFns));

  return clone
}
}

function split(separator){
	return str => str.split(separator)
}

function splitEvery(sliceLength) {
	return list => {
  if (sliceLength < 1) {
    throw new Error('First argument to splitEvery must be a positive integer')
  }

  const willReturn = [];
  let counter = 0;

  while (counter < list.length) {
    willReturn.push(list.slice(counter, (counter += sliceLength)));
  }

  return willReturn
}
}

function symmetricDifference(x) {
	return y =>  concat(
			filter(value => !includes(value)(y), x),
			filter(value => !includes(value)(x), y),
		)
	
}

function tail(listOrString) {
  return drop(1)(listOrString)
}

function take(numberOfItems) {
  return input => {
    if (numberOfItems < 0) {
      return input.slice()
    }
    if (typeof input === 'string') {
      return input.slice(0, numberOfItems)
    }

    return baseSlice(input, 0, numberOfItems)
  }
}

function takeLast(numberOfItems) {
  return input => {
    const len = input.length;
    if (numberOfItems < 0) {
      return input.slice()
    }
    let numValue = numberOfItems > len ? len : numberOfItems;

    if (typeof input === 'string') {
      return input.slice(len - numValue)
    }

    numValue = len - numValue;

    return baseSlice(input, numValue, len)
  }
}

function takeLastWhile(predicate) {
	return input => {
		if (input.length === 0) {
			return input
		}
	
		const toReturn = [];
		let counter = input.length;
	
		while (counter) {
			const item = input[--counter];
			if (!predicate(item)) {
				break
			}
			toReturn.push(item);
		}
	
		return toReturn.reverse() 
	}
}

function takeWhile(predicate) {
  return iterable => {
    const toReturn = [];
    let counter = 0;

    while (counter < iterable.length) {
      const item = iterable[counter++];
      if (!predicate(item)) {
        break
      }
      toReturn.push(item);
    }
    return toReturn
  }
}

function tap(fn) {
	return x => {
  fn(x);

  return x
}
}

function test(pattern) {
	return str => str.search(pattern) !== -1
}

function tryCatch(fn, fallback) {
  return input => {
    try {
      return fn(input)
    } catch (e) {
      return fallback
    }
  }
}

function union(x) {
  return y => {
    const toReturn = cloneList(x);

    y.forEach(yInstance => {
      if (!includes(yInstance, x)) {
        toReturn.push(yInstance);
      }
    });

    return toReturn
  }
}

function uniqBy(fn) {
	return list => {
		const set = new _Set();

		return list.filter(item => set.checkUniqueness(fn(item)))
	}
}

function includesWith(predicate, target, list) {
  let willReturn = false;
  let index = -1;

  while (++index < list.length && !willReturn) {
    const value = list[index];

    if (predicate(target, value)) {
      willReturn = true;
    }
  }

  return willReturn
}

function uniqWith(predicate) {
	return list => {
  let index = -1;
  const willReturn = [];

  while (++index < list.length) {
    const value = list[index];

    if (!includesWith(predicate, value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn
}
}

function unless(predicate, whenFalseFn) {
  return input => {
    if (predicate(input)) {
      return input
    }

    return whenFalseFn(input)
  }
}

function unwind(property) {
  return obj => {
    return obj[property].map(x => ({
      ...obj,
      [property]: x,
    }))
  }
}

function when(predicate, whenTrueFn) {
  return input => {
    if (!predicate(input)) {
      return input
    }

    return whenTrueFn(input)
  }
}

function zip(left) {
  return right => {
    const result = [];
    const length = Math.min(left.length, right.length);

    for (let i = 0; i < length; i++) {
      result[i] = [left[i], right[i]];
    }

    return result
  }
}

function zipWith(fn, x) {
  return y =>
    take(x.length > y.length ? y.length : x.length).map((xInstance, i) =>
      fn(xInstance, y[i]),
    )
}

exports._arity = _arity;
exports._includes = _includes;
exports._indexOf = _indexOf;
exports._lastIndexOf = _lastIndexOf;
exports.add = add;
exports.all = all;
exports.allPass = allPass;
exports.any = any;
exports.anyPass = anyPass;
exports.append = append;
exports.assoc = assoc;
exports.assocPath = assocPath;
exports.checkObjectWithSpec = checkObjectWithSpec;
exports.complement = complement;
exports.concat = concat;
exports.count = count;
exports.countBy = countBy;
exports.defaultTo = defaultTo;
exports.difference = difference;
exports.differenceWithFn = differenceWithFn;
exports.dissoc = dissoc;
exports.dissocPath = dissocPath;
exports.drop = drop;
exports.dropLast = dropLast;
exports.dropLastWhile = dropLastWhile;
exports.dropWhile = dropWhile;
exports.eqBy = eqBy;
exports.eqProps = eqProps;
exports.equals = equals;
exports.evolve = evolve;
exports.filter = filter;
exports.filterArray = filterArray;
exports.find = find;
exports.findIndex = findIndex;
exports.findLast = findLast;
exports.findLastIndex = findLastIndex;
exports.flatMap = flatMap;
exports.flatten = flatten;
exports.fromPairs = fromPairs;
exports.getPropertyOrDefault = getPropertyOrDefault;
exports.groupBy = groupBy;
exports.head = head;
exports.includes = includes;
exports.indexOf = indexOf;
exports.init = init;
exports.innerJoin = innerJoin;
exports.intersection = intersection;
exports.intersperse = intersperse;
exports.join = join;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.map = map;
exports.mapObject = mapObject;
exports.match = match;
exports.maxBy = maxBy;
exports.merge = merge;
exports.mergeAll = mergeAll;
exports.mergeTypes = mergeTypes;
exports.minBy = minBy;
exports.modifyPath = modifyPath;
exports.none = none;
exports.objOf = objOf;
exports.omit = omit;
exports.partition = partition;
exports.partitionArray = partitionArray;
exports.partitionObject = partitionObject;
exports.path = path;
exports.pathSatisfies = pathSatisfies;
exports.pick = pick;
exports.pipe = pipe;
exports.pluck = pluck;
exports.prepend = prepend;
exports.prop = prop;
exports.propEq = propEq;
exports.propSatisfies = propSatisfies;
exports.reduce = reduce;
exports.reject = reject;
exports.removeIndex = removeIndex;
exports.repeat = repeat;
exports.replace = replace;
exports.replaceItemAtIndex = replaceItemAtIndex;
exports.sort = sort;
exports.sortBy = sortBy;
exports.sortWith = sortWith;
exports.split = split;
exports.splitEvery = splitEvery;
exports.symmetricDifference = symmetricDifference;
exports.tail = tail;
exports.take = take;
exports.takeLast = takeLast;
exports.takeLastWhile = takeLastWhile;
exports.takeWhile = takeWhile;
exports.tap = tap;
exports.test = test;
exports.tryCatch = tryCatch;
exports.type = type;
exports.union = union;
exports.uniq = uniq;
exports.uniqBy = uniqBy;
exports.uniqWith = uniqWith;
exports.unless = unless;
exports.unwind = unwind;
exports.update = update;
exports.when = when;
exports.zip = zip;
exports.zipWith = zipWith;
