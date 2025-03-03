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
  return (input) => {
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
  return (input) => {
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

function append(x, input) {
  if (arguments.length === 1) {
    return _input => append(x, _input)
  }

  if (typeof input === 'string') {
    return input.split('').concat(x)
  }

  const clone = cloneList(input);
  clone.push(x);

  return clone
}

function assocFn(prop, newValue) {
  return obj => Object.assign({}, obj, { [prop]: newValue })
}

function _isInteger(n) {
  return n << 0 === n
}

const isInteger = Number.isInteger || _isInteger;

/**
 * Check if `index` is integer even if it is a string.
 */
const isIndexInteger = index => Number.isInteger(Number(index));

function createPath(path, delimiter = '.') {
  return typeof path === 'string'
    ? path.split(delimiter).map(x => (isInteger(x) ? Number(x) : x))
    : path
}

const { isArray } = Array;

function assocPath(path, newValue){
	return (input) => {
  const pathArrValue = createPath(path);
  if (pathArrValue.length === 0) {
    return newValue
  }

  const index = pathArrValue[0];
  if (pathArrValue.length > 1) {
    const condition =
      typeof input !== 'object' || input === null || !Object.hasOwn(input, index);

    const nextInput = condition
      ? isIndexInteger(pathArrValue[1])
        ? []
        : {}
      : input[index];

    newValue = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1),
      newValue,
      nextInput,
    );
  }

  if (isIndexInteger(index) && isArray(input)) {
    const arr = cloneList(input);
    arr[index] = newValue;

    return arr
  }

  return assocFn(index, newValue)
}
}

function checkObjectWithSpec(conditions) {
	return function(input) {
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

function clone(input) {
  const out = isArray(input) ? Array(input.length) : {};
  if (input?.getTime) {
    return new Date(input.getTime())
  }

  for (const key in input) {
    const v = input[key];
    out[key] =
      typeof v === 'object' && v !== null
        ? v.getTime
          ? new Date(v.getTime())
          : clone(v)
        : v;
  }

  return out
}

function complement(fn) {
  return (...input) => !fn(...input)
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

function _arity(n, fn){
  switch (n){
  case 0:
    return function (){
      return fn.apply(this, arguments)
    }
  case 1:
    return function (a0){
      return fn.apply(this, arguments)
    }
  case 2:
    return function (a0, a1){
      return fn.apply(this, arguments)
    }
  case 3:
    return function (
      a0, a1, a2
    ){
      return fn.apply(this, arguments)
    }
  case 4:
    return function (
      a0, a1, a2, a3
    ){
      return fn.apply(this, arguments)
    }
  case 5:
    return function (
      a0, a1, a2, a3, a4
    ){
      return fn.apply(this, arguments)
    }
  case 6:
    return function (
      a0, a1, a2, a3, a4, a5
    ){
      return fn.apply(this, arguments)
    }
  case 7:
    return function (
      a0, a1, a2, a3, a4, a5, a6
    ){
      return fn.apply(this, arguments)
    }
  case 8:
    return function (
      a0, a1, a2, a3, a4, a5, a6, a7
    ){
      return fn.apply(this, arguments)
    }
  case 9:
    return function (
      a0, a1, a2, a3, a4, a5, a6, a7, a8
    ){
      return fn.apply(this, arguments)
    }
  case 10:
    return function (
      a0, a1, a2, a3, a4, a5, a6, a7, a8, a9
    ){
      return fn.apply(this, arguments)
    }
  default:
    throw new Error('First argument to _arity must be a non-negative integer no greater than ten')
  }
}

function _pipe(f, g){
  return function (){
    return g.call(this, f.apply(this, arguments))
  }
}

function pipe(){
  if (arguments.length === 0){
    throw new Error('pipe requires at least one argument')
  }

  return _arity(arguments[ 0 ].length,
    reduce(
      _pipe,
      arguments[ 0 ],
		)(
      Array.prototype.slice.call(
        arguments, 1, Infinity
      )
    ))
}

function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument')
  }

  return pipe.apply(this, Array.prototype.slice.call(arguments, 0).reverse())
}

function concat(x, y) {
  if (arguments.length === 1) {
    return _y => concat(x, _y)
  }

  return typeof x === 'string' ? `${x}${y}` : [...x, ...y]
}

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
	return (b) =>  {
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

function _includes(a, list) {
  let index = -1;
  const { length } = list;

  while (++index < length) {
    if (String(list[index])=== String(a)) {
      return true
    }
  }

  return false
}


function omit(propsToOmit, obj) {
  if (arguments.length === 1) {
    return _obj => omit(propsToOmit, _obj)
  }

  if (obj === null || obj === undefined) {
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

function pathFn(pathInput, obj) {
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

function path(pathInput, obj) {
  if (arguments.length === 1) {
    return _obj => path(pathInput, _obj)
  }

  if (obj === null || obj === undefined) {
    return undefined
  }

  return pathFn(pathInput, obj)
}

function removeIndex(index) {
	return list => {
  if (index <= 0) {
    return list.slice(1)
  }
  if (index >= list.length - 1) {
    return list.slice(0, list.length - 1)
  }

  return [...list.slice(0, index), ...list.slice(index + 1)]
}
}

function update(
  index, newValue, list
){
  const clone = cloneList(list);
  if (index === -1) return clone.fill(newValue, index)

  return clone.fill(
    newValue, index, index + 1
  )
}


function dissocPath(pathInput, input) {
  if (arguments.length === 1) {
    return _obj => dissocPath(pathInput, _obj)
  }

  const pathArrValue = createPath(pathInput);
  // this {...input} spread could be done to satisfy ramda specs, but this is done on so many places
  // TODO: add warning that Rambda simply returns input if path is empty
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
      ? isIndexInteger(pathArrValue[1])
        ? []
        : {}
      : input[index];
    const nextPathInput = Array.prototype.slice.call(pathArrValue, 1);
    const intermediateResult = dissocPath(nextPathInput, nextInput, input);
    if (isArray(input)) {
      return update(index, intermediateResult, input)
    }

    return {
      ...input,
      [index]: intermediateResult,
    }
  }
  if (isArray(input)) {
    return removeIndex(index)
  }

  return omit([index], input)
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

function dropLastWhile(predicate, iterable) {
  if (arguments.length === 1) {
    return _iterable => dropLastWhile(predicate, _iterable)
  }
  if (iterable.length === 0) {
    return iterable
  }
  const isArray$1 = isArray(iterable);

  if (typeof predicate !== 'function') {
    throw new Error(`'predicate' is from wrong type ${typeof predicate}`)
  }
  if (!isArray$1 && typeof iterable !== 'string') {
    throw new Error(`'iterable' is from wrong type ${typeof iterable}`)
  }

  const toReturn = [];
  let counter = iterable.length;

  while (counter) {
    const item = iterable[--counter];
    if (!predicate(item)) {
      toReturn.push(item);
      break
    }
  }

  while (counter) {
    toReturn.push(iterable[--counter]);
  }

  return isArray$1 ? toReturn.reverse() : toReturn.reverse().join('')
}

function dropRepeats(list) {
  if (!isArray(list)) {
    throw new Error(`${list} is not a list`)
  }

  const toReturn = [];

  list.reduce((prev, current) => {
    if (!equals(prev, current)) {
      toReturn.push(current);
    }

    return current
  }, undefined);

  return toReturn
}

function dropRepeatsBy(fn) {
	return list => {
		let lastEvaluated = null;
	
		return list.slice().filter(item => {
			if (lastEvaluated === null) {
				lastEvaluated = fn(item);
	
				return true
			}
			const evaluatedResult = fn(item);
			if (equals(lastEvaluated, evaluatedResult)) {
				return false
			}
	
			lastEvaluated = evaluatedResult;
	
			return true
		})
	}
}

function dropRepeatsWith(predicate, list) {
  if (arguments.length === 1) {
    return _iterable => dropRepeatsWith(predicate, _iterable)
  }

  if (!isArray(list)) {
    throw new Error(`${list} is not a list`)
  }

  const toReturn = [];

  list.reduce((prev, current) => {
    if (prev === undefined) {
      toReturn.push(current);

      return current
    }
    if (!predicate(prev, current)) {
      toReturn.push(current);
    }

    return current
  }, undefined);

  return toReturn
}

function dropWhile(predicate, iterable) {
  if (arguments.length === 1) {
    return _iterable => dropWhile(predicate, _iterable)
  }
  const isArray$1 = isArray(iterable);
  if (!isArray$1 && typeof iterable !== 'string') {
    throw new Error('`iterable` is neither list nor a string')
  }

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

  return isArray$1 ? toReturn : toReturn.join('')
}

function endsWith(target, iterable) {
  if (arguments.length === 1) {
    return _iterable => endsWith(target, _iterable)
  }

  if (typeof iterable === 'string') {
    return iterable.endsWith(target)
  }
  if (!isArray(target)) {
    return false
  }

  const diff = iterable.length - target.length;
  let correct = true;
  const filtered = target.filter((x, index) => {
    if (!correct) {
      return false
    }
    const result = equals(x, iterable[index + diff]);
    if (!result) {
      correct = false;
    }

    return result
  });

  return filtered.length === target.length
}

function eqBy(fn, a) {
  return b => equals(fn(a), fn(b))
}

function propFn(searchProperty, obj) {
  if (!obj) {
    return undefined
  }

  return obj[searchProperty]
}

function prop(searchProperty, obj) {
  if (arguments.length === 1) {
    return _obj => prop(searchProperty, _obj)
  }

  return propFn(searchProperty, obj)
}

function eqProps(property, objA) {
  return objB => equals(prop(property, objA), prop(property, objB))
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

function _map(fn, list) {
    let index = 0;
    const willReturn = Array(list.length);
    while (index < list.length) {
      willReturn[index] = fn(list[index], index);
      index++;
    }
    return willReturn
}

function evolveArray(rules, list) {
  return _map(
    (x, i) => {
      if (type(rules[i]) === 'Function') {
        return rules[i](x)
      }

      return x
    },
    list,
  )
}

function evolveObject(rules, iterable) {
  return mapObject((x, prop) => {
    if (type(x) === 'Object') {
      const typeRule = type(rules[prop]);
      if (typeRule === 'Function') {
        return rules[prop](x)
      }
      if (typeRule === 'Object') {
        return evolve(rules[prop], x)
      }

      return x
    }
    if (type(rules[prop]) === 'Function') {
      return rules[prop](x)
    }

    return x
  })(iterable)
}

function evolve(rules, iterable) {
  if (arguments.length === 1) {
    return _iterable => evolve(rules, _iterable)
  }
  const rulesType = type(rules);
  const iterableType = type(iterable);

  if (iterableType !== rulesType) {
    throw new Error('iterableType !== rulesType')
  }

  if (!['Object', 'Array'].includes(rulesType)) {
    throw new Error(`'iterable' and 'rules' are from wrong type ${rulesType}`)
  }

  if (iterableType === 'Object') {
    return evolveObject(rules, iterable)
  }

  return evolveArray(rules, iterable)
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

function has(prop, obj) {
  if (arguments.length === 1) {
    return _obj => has(prop, _obj)
  }

  if (!obj) {
    return false
  }

  return Object.hasOwn(obj, prop)
}

function hasIn(searchProperty, obj) {
  if (arguments.length === 1) {
    return _obj => hasIn(searchProperty, _obj)
  }

  return propFn(searchProperty, obj) !== undefined
}

function hasPath(pathInput) {
  return obj => path(pathInput, obj) !== undefined
}

function head(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString[0] || ''
  }

  return listOrString[0]
}

function indexByPath(pathInput, list) {
  const toReturn = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[path(pathInput, item)] = item;
  }

  return toReturn
}

function indexBy(condition, list) {
  if (arguments.length === 1) {
    return _list => indexBy(condition, _list)
  }

  if (typeof condition === 'string') {
    return indexByPath(condition, list)
  }

  const toReturn = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[condition(item)] = item;
  }

  return toReturn
}

function indexOf(valueToFind, list) {
  if (arguments.length === 1) {
    return _list => _indexOf(valueToFind, _list)
  }

  return _indexOf(valueToFind, list)
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

function insertAtIndex(indexToInsert, valueToInsert) {
	return array => ([
    ...array.slice(0, indexToInsert),
    valueToInsert,
    ...array.slice(indexToInsert),
  ])
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
      willReturn[index] = fn(list[index]);
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
  return y => compareFn(y) > compareFn(x) ? y : x
}

function merge(target) {
	return objectWithNewProps => Object.assign({}, target || {}, objectWithNewProps || {})
}

function mergeAll(arr) {
  let willReturn = {};

  return willReturn
}

function minBy(compareFn, x) {
  return y => compareFn(y) < compareFn(x) ? y : x
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

function nth(index, input) {
  if (arguments.length === 1) {
    return _input => nth(index, _input)
  }

  const idx = index < 0 ? input.length + index : index;

  return Object.prototype.toString.call(input) === '[object String]'
    ? input.charAt(idx)
    : input[idx]
}

function objOf(key, value) {
  if (arguments.length === 1) {
    return _value => objOf(key, _value)
  }

  return { [key]: value }
}

function of(value) {
  return [value]
}

function partial(fn, ...args) {
  const len = fn.length;

  // If a single array argument is given, those are the args (a la Ramda).
  // Otherwise, the variadic arguments are the args.
  const argList = args.length === 1 && isArray(args[0]) ? args[0] : args;

  return (...rest) => {
    if (argList.length + rest.length >= len) {
      return fn(...argList, ...rest)
    }

    return partial(fn, ...[...argList, ...rest])
  }
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

function pathEq(pathToSearch, target) {
  return input =>  equals(path(pathToSearch, input), target)
}

function pathOr(defaultValue, pathInput) {
  return obj => defaultTo(defaultValue, path(pathInput, obj))
}

function pathSatisfies(fn, pathInput) {
  return obj => Boolean(fn(path(pathInput, obj)))
}

function paths(pathsToSearch, obj) {
  if (arguments.length === 1) {
    return _obj => paths(pathsToSearch, _obj)
  }

  return pathsToSearch.map(singlePath => path(singlePath, obj))
}

function pick(propsToPick, input) {
  if (arguments.length === 1) {
    return _input => pick(propsToPick, _input)
  }

  if (input === null || input === undefined) {
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

function pickAll(propsToPick) {
	return obj => {
  if (obj === null || obj === undefined) {
    return undefined
  }
  const keysValue = createPath(propsToPick, ',');
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    } else {
      willReturn[keysValue[counter]] = undefined;
    }
    counter++;
  }

  return willReturn
}
}

function pickBy(predicate, obj) {
  if (arguments.length === 1) {
    return _obj => pickBy(predicate, _obj)
  }
  return Object.keys(obj).reduce((accum, key) => {
    if (predicate(obj[key], key, obj)) {
      accum[key] = obj[key];
    }
    return accum
  }, {})
}

function piped(...inputs) {
  const [input, ...fnList] = inputs;

  return pipe(...fnList)(input)
}

function pluck(property, list) {
  if (arguments.length === 1) {
    return _list => pluck(property, _list)
  }

  const willReturn = [];

  return willReturn
}

function prepend(x, input) {
  if (arguments.length === 1) {
    return _input => prepend(x, _input)
  }

  if (typeof input === 'string') {
    return [x].concat(input.split(''))
  }

  return [x].concat(input)
}

function propEq(valueToMatch, propToFind) {
	return obj => {
  if (!obj) {
    return false
  }

  return equals(valueToMatch, prop(propToFind, obj))
}
}

function propOr(defaultValue, property) {
	return obj => {
		if (!obj) {
			return defaultValue
		}
	
		return defaultTo(defaultValue, obj[property])
	}
}

function propSatisfies(predicate, property) {
  return obj => predicate(prop(property, obj))
}

function props(propsToPick) {
	return obj => propsToPick.map(prop => obj[prop])
}

function reject(predicate, list) {
  if (arguments.length === 1) {
    return _list => reject(predicate, _list)
  }

  return filter(x => !predicate(x), list)
}

function repeat(x, timesToRepeat) {
  if (arguments.length === 1) {
    return _timesToRepeat => repeat(x, _timesToRepeat)
  }

  return Array(timesToRepeat).fill(x)
}

function replace(pattern, replacer) {
  return (str) => str.replace(pattern, replacer)
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

function reverse(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString.split('').reverse().join('')
  }

  const clone = listOrString.slice();

  return clone.reverse()
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

function sortWith(listOfSortingFns, list) {
  if (arguments.length === 1) {
    return _list => sortWith(listOfSortingFns, _list)
  }

  if (Array.isArray(list) === false) {
    return []
  }

  const clone = list.slice();
  clone.sort((a, b) => sortHelper(a, b, listOfSortingFns));

  return clone
}

function split(separator, str) {
  if (arguments.length === 1) {
    return _str => split(separator, _str)
  }

  return str.split(separator)
}

function splitEvery(sliceLength, listOrString) {
  if (arguments.length === 1) {
    return _listOrString => splitEvery(sliceLength, _listOrString)
  }

  if (sliceLength < 1) {
    throw new Error('First argument to splitEvery must be a positive integer')
  }

  const willReturn = [];
  let counter = 0;

  while (counter < listOrString.length) {
    willReturn.push(listOrString.slice(counter, (counter += sliceLength)));
  }

  return willReturn
}

function splitWhen(predicate, input) {
  if (arguments.length === 1) {
    return _input => splitWhen(predicate, _input)
  }
  if (!input) {
    throw new TypeError(`Cannot read property 'length' of ${input}`)
  }

  const preFound = [];
  const postFound = [];
  let found = false;
  let counter = -1;

  while (counter++ < input.length - 1) {
    if (found) {
      postFound.push(input[counter]);
    } else if (predicate(input[counter])) {
      postFound.push(input[counter]);
      found = true;
    } else {
      preFound.push(input[counter]);
    }
  }

  return [preFound, postFound]
}

function startsWith(question, iterable) {
  if (arguments.length === 1) {
    return _iterable => startsWith(question, _iterable)
  }

  if (typeof iterable === 'string') {
    return iterable.startsWith(question)
  }
  if (!isArray(question)) {
    return false
  }

  let correct = true;
  const filtered = question.filter((x, index) => {
    if (!correct) {
      return false
    }
    const result = equals(x, iterable[index]);
    if (!result) {
      correct = false;
    }

    return result
  });

  return filtered.length === question.length
}

function symmetricDifference(x, y) {
  if (arguments.length === 1) {
    return _y => symmetricDifference(x, _y)
  }

  return concat(
    filter(value => !includes(value, y), x),
    filter(value => !includes(value, x), y),
  )
}

function tail(listOrString) {
  return drop(1, listOrString)
}

function take(numberOfItems){
	return input => {
	if (howMany < 0) return input.slice()
	if (typeof input === 'string') return input.slice(0, howMany)

	return baseSlice(
		input, 0, howMany
	)
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

function takeLastWhile(predicate, input) {
  if (arguments.length === 1) {
    return _input => takeLastWhile(predicate, _input)
  }
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

  return isArray(input) ? toReturn.reverse() : toReturn.reverse().join('')
}

function takeWhile(predicate) {
	return iterable => {
  const isArray$1 = isArray(iterable);
  if (!isArray$1 && typeof iterable !== 'string') {
    throw new Error('`iterable` is neither list nor a string')
  }

  const toReturn = [];
  let counter = 0;

  while (counter < iterable.length) {
    const item = iterable[counter++];
    if (!predicate(item)) {
      break
    }
    toReturn.push(item);
  }

  return isArray$1 ? toReturn : toReturn.join('')
}
}

function tap(fn, x) {
  if (arguments.length === 1) {
    return _x => tap(fn, _x)
  }

  fn(x);

  return x
}

function test(pattern, str) {
  if (arguments.length === 1) {
    return _str => test(pattern, _str)
  }

  if (typeof pattern === 'string') {
    throw new TypeError(
      `R.test requires a value of type RegExp as its first argument; received "${pattern}"`,
    )
  }

  return str.search(pattern) !== -1
}

function toPairs(obj) {
  return Object.entries(obj)
}

const isFunction = x => ['Promise', 'Function'].includes(type(x));

function tryCatch(fn, fallback) {
  if (!isFunction(fn)) {
    throw new Error(`R.tryCatch | fn '${fn}'`)
  }
  const passFallback = isFunction(fallback);

  return (...inputs) => {
    try {
      return fn(...inputs)
    } catch (e) {
      return passFallback ? fallback(e, ...inputs) : fallback
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

function uniqBy(fn, list) {
  if (arguments.length === 1) {
    return _list => uniqBy(fn, _list)
  }
  const set = new _Set();

  return list.filter(item => set.checkUniqueness(fn(item)))
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

function uniqWith(predicate, list) {
  if (arguments.length === 1) {
    return _list => uniqWith(predicate, _list)
  }

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

function unless(predicate, whenFalseFn) {
	return input => {
  if (predicate(input)) {
    return input
  }

  return whenFalseFn(input)
}}

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

function without(matchAgainst, source) {
  if (source === undefined) {
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
      _indexOf(current, matchAgainst) > -1 ? prev : prev.concat(current),
    [])
}

function zip(left) {
	return (right) => {
  const result = [];
  const length = Math.min(left.length, right.length);

  for (let i = 0; i < length; i++) {
    result[i] = [left[i], right[i]];
  }

  return result
}
}

function zipObj(keys, values) {
  if (arguments.length === 1) {
    return yHolder => zipObj(keys, yHolder)
  }

  return take(values.length).reduce((prev, xInstance, i) => {
    prev[xInstance] = values[i];

    return prev
  }, {})
}

function zipWith(fn, x) {
	return y => take(x.length > y.length ? y.length : x.length).map((xInstance, i) =>
    fn(xInstance, y[i]),
  )
}

export { _arity, _includes, _indexOf, _lastIndexOf, add, all, allPass, any, anyPass, append, assocFn, assocPath, checkObjectWithSpec, clone, complement, compose, concat, count, countBy, defaultTo, difference, differenceWithFn, dissoc, dissocPath, drop, dropLast, dropLastWhile, dropRepeats, dropRepeatsBy, dropRepeatsWith, dropWhile, endsWith, eqBy, eqProps, equals, evolve, evolveArray, evolveObject, filter, filterArray, filterObject, find, findIndex, findLast, findLastIndex, flatMap, flatten, fromPairs, groupBy, has, hasIn, hasPath, head, includes, indexBy, indexOf, init, innerJoin, insertAtIndex, intersection, intersperse, join, last, lastIndexOf, map, mapObject, match, maxBy, merge, mergeAll, minBy, none, nth, objOf, of, omit, partial, partition, partitionArray, partitionObject, path, pathEq, pathFn, pathOr, pathSatisfies, paths, pick, pickAll, pickBy, pipe, piped, pluck, prepend, prop, propEq, propFn, propOr, propSatisfies, props, reduce, reject, removeIndex, repeat, replace, replaceItemAtIndex, reverse, sort, sortBy, sortWith, split, splitEvery, splitWhen, startsWith, symmetricDifference, tail, take, takeLast, takeLastWhile, takeWhile, tap, test, toPairs, tryCatch, type, union, uniq, uniqBy, uniqWith, unless, unwind, update, when, without, zip, zipObj, zipWith };
