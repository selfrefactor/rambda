'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function F() {
  return false;
}

function T() {
  return true;
}

function add(a, b) {
  if (arguments.length === 1) return _b => add(a, _b);
  return Number(a) + Number(b);
}

function _curryN(n, cache, fn) {
  return function () {
    let ci = 0;
    let ai = 0;
    const cl = cache.length;
    const al = arguments.length;
    const args = new Array(cl + al);

    while (ci < cl) {
      args[ci] = cache[ci];
      ci++;
    }

    while (ai < al) {
      args[cl + ai] = arguments[ai];
      ai++;
    }

    const remaining = n - args.length;
    return args.length >= n ? fn.apply(this, args) : _arity(remaining, _curryN(n, args, fn));
  };
}

function _arity(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (_1) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (_1, _2) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (_1, _2, _3) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (_1, _2, _3, _4) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (_1, _2, _3, _4, _5) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (_1, _2, _3, _4, _5, _6) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (_1, _2, _3, _4, _5, _6, _7) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (_1, _2, _3, _4, _5, _6, _7, _8) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (_1, _2, _3, _4, _5, _6, _7, _8, _9) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

function curryN(n, fn) {
  if (arguments.length === 1) return _fn => curryN(n, _fn);
  return _arity(n, _curryN(n, [], fn));
}

function curry(fn) {
  return curryN(fn.length, fn);
}

function adjustFn(index, replaceFn, list) {
  const actualIndex = index < 0 ? list.length + index : index;
  if (index >= list.length || actualIndex < 0) return list;
  const clone = list.slice();
  clone[actualIndex] = replaceFn(clone[actualIndex]);
  return clone;
}

const adjust = curry(adjustFn);

function all(predicate, list) {
  if (arguments.length === 1) return _list => all(predicate, _list);

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i], i)) return false;
  }

  return true;
}

function allPass(predicates) {
  return input => {
    let counter = 0;

    while (counter < predicates.length) {
      if (!predicates[counter](input)) {
        return false;
      }

      counter++;
    }

    return true;
  };
}

function always(x) {
  return () => x;
}

function and(a, b) {
  if (arguments.length === 1) return _b => and(a, _b);
  return a && b;
}

function any(predicate, list) {
  if (arguments.length === 1) return _list => any(predicate, _list);
  let counter = 0;

  while (counter < list.length) {
    if (predicate(list[counter], counter)) {
      return true;
    }

    counter++;
  }

  return false;
}

function anyPass(predicates) {
  return input => {
    let counter = 0;

    while (counter < predicates.length) {
      if (predicates[counter](input)) {
        return true;
      }

      counter++;
    }

    return false;
  };
}

function append(x, listOrString) {
  if (arguments.length === 1) return _listOrString => append(x, _listOrString);
  if (typeof listOrString === 'string') return `${listOrString}${x}`;
  const clone = listOrString.slice();
  clone.push(x);
  return clone;
}

function __findHighestArity(spec, max = 0) {
  for (const key in spec) {
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue;

    if (typeof spec[key] === 'object') {
      max = Math.max(max, __findHighestArity(spec[key]));
    }

    if (typeof spec[key] === 'function') {
      max = Math.max(max, spec[key].length);
    }
  }

  return max;
}

function __filterUndefined() {
  const defined = [];
  let i = 0;
  const l = arguments.length;

  while (i < l) {
    if (typeof arguments[i] === 'undefined') break;
    defined[i] = arguments[i];
    i++;
  }

  return defined;
}

function __applySpecWithArity(spec, arity, cache) {
  const remaining = arity - cache.length;
  if (remaining === 1) return x => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x));
  if (remaining === 2) return (x, y) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y));
  if (remaining === 3) return (x, y, z) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y, z));
  if (remaining === 4) return (x, y, z, a) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y, z, a));
  if (remaining > 4) return (...args) => __applySpecWithArity(spec, arity, __filterUndefined(...cache, ...args));

  if (Array.isArray(spec)) {
    const ret = [];
    let i = 0;
    const l = spec.length;

    for (; i < l; i++) {
      if (typeof spec[i] === 'object' || Array.isArray(spec[i])) {
        ret[i] = __applySpecWithArity(spec[i], arity, cache);
      }

      if (typeof spec[i] === 'function') {
        ret[i] = spec[i](...cache);
      }
    }

    return ret;
  }

  const ret = {};

  for (const key in spec) {
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue;

    if (typeof spec[key] === 'object') {
      ret[key] = __applySpecWithArity(spec[key], arity, cache);
      continue;
    }

    if (typeof spec[key] === 'function') {
      ret[key] = spec[key](...cache);
    }
  }

  return ret;
}

function applySpec(spec, ...args) {
  const arity = __findHighestArity(spec);

  if (arity === 0) {
    return () => ({});
  }

  const toReturn = __applySpecWithArity(spec, arity, args);

  return toReturn;
}

function assocFn(prop, newValue, obj) {
  return Object.assign({}, obj, {
    [prop]: newValue
  });
}

const assoc = curry(assocFn);

function _isInteger(n) {
  return n << 0 === n;
}
var _isInteger$1 = Number.isInteger || _isInteger;

function assocPathFn(list, newValue, input) {
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;

  if (pathArrValue.length === 0) {
    return newValue;
  }

  const index = pathArrValue[0];

  if (pathArrValue.length > 1) {
    const condition = typeof input !== 'object' || input === null || !input.hasOwnProperty(index);
    const nextinput = condition ? _isInteger(parseInt(pathArrValue[1], 10)) ? [] : {} : input[index];
    newValue = assocPathFn(Array.prototype.slice.call(pathArrValue, 1), newValue, nextinput);
  }

  if (_isInteger(parseInt(index, 10)) && Array.isArray(input)) {
    const arr = input.slice();
    arr[index] = newValue;
    return arr;
  }

  return assoc(index, newValue, input);
}

const assocPath = curry(assocPathFn);

function both(f, g) {
  if (arguments.length === 1) return _g => both(f, _g);
  return (...input) => f(...input) && g(...input);
}

function chain(fn, list) {
  if (arguments.length === 1) {
    return _list => chain(fn, _list);
  }

  return [].concat(...list.map(fn));
}

function clampFn(min, max, input) {
  if (input >= min && input <= max) return input;
  if (input > max) return max;
  if (input < min) return min;
}

const clamp = curry(clampFn);

function clone(input) {
  const out = Array.isArray(input) ? Array(input.length) : {};
  if (input && input.getTime) return new Date(input.getTime());

  for (const key in input) {
    const v = input[key];
    out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
  }

  return out;
}

function complement(fn) {
  return (...input) => !fn(...input);
}

function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return (...args) => {
    const list = fns.slice();

    if (list.length > 0) {
      const fn = list.pop();
      let result = fn(...args);

      while (list.length > 0) {
        result = list.pop()(result);
      }

      return result;
    }
  };
}

function concat(x, y) {
  if (arguments.length === 1) return _y => concat(x, _y);
  return typeof x === 'string' ? `${x}${y}` : [...x, ...y];
}

function cond(conditions) {
  return input => {
    let done = false;
    let toReturn;
    conditions.forEach(([predicate, resultClosure]) => {
      if (!done && predicate(input)) {
        done = true;
        toReturn = resultClosure(input);
      }
    });
    return toReturn;
  };
}

function mapObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    willReturn[prop] = fn(obj[prop], prop, obj);
  }

  return willReturn;
}

function map(fn, list) {
  if (arguments.length === 1) return _list => map(fn, _list);

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return mapObject(fn, list);
  }

  let index = -1;
  const len = list.length;
  const willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(list[index], index);
  }

  return willReturn;
}

function max(x, y) {
  if (arguments.length === 1) return _y => max(x, _y);
  return y > x ? y : x;
}

function reduceFn(reducer, acc, list) {
  const clone = list.slice();
  return clone.reduce(reducer, acc);
}

const reduce = curry(reduceFn);

function converge(fn, transformers) {
  if (arguments.length === 1) return _transformers => converge(fn, _transformers);
  const highestArity = reduce((a, b) => max(a, b.length), 0, transformers);
  return curryN(highestArity, function () {
    return fn.apply(this, map(g => g.apply(this, arguments), transformers));
  });
}

const dec = x => x - 1;

function flagIs(inputArguments) {
  return inputArguments === undefined || inputArguments === null || Number.isNaN(inputArguments) === true;
}

function defaultTo(defaultArgument, ...inputArguments) {
  if (arguments.length === 1) {
    return _inputArguments => defaultTo(defaultArgument, _inputArguments);
  } else if (arguments.length === 2) {
    return flagIs(inputArguments[0]) ? defaultArgument : inputArguments[0];
  }

  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (flagIs(instance)) {
      len -= 1;
    } else {
      holder = instance;
      ready = true;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function type(input) {
  const typeOf = typeof input;

  if (input === null) {
    return 'Null';
  } else if (input === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return Number.isNaN(input) ? 'NaN' : 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(input)) {
    return 'Array';
  } else if (input instanceof RegExp) {
    return 'RegExp';
  }

  const asStr = input && input.toString ? input.toString() : '';
  if (['true', 'false'].includes(asStr)) return 'Boolean';
  if (!Number.isNaN(Number(asStr))) return 'Number';
  if (asStr.startsWith('async')) return 'Async';
  if (asStr === '[object Promise]') return 'Promise';
  if (typeOf === 'function') return 'Function';
  if (input instanceof String) return 'String';
  return 'Object';
}

function parseError(maybeError) {
  const typeofError = maybeError.__proto__.toString();

  if (!['Error', 'TypeError'].includes(typeofError)) return [];
  return [typeofError, maybeError.message];
}

function parseDate(maybeDate) {
  if (!maybeDate.toDateString) return [false];
  return [true, maybeDate.getTime()];
}

function parseRegex(maybeRegex) {
  if (maybeRegex.constructor !== RegExp) return [false];
  return [true, maybeRegex.toString()];
}

function equals(a, b) {
  if (arguments.length === 1) return _b => equals(a, _b);
  const aType = type(a);
  if (aType !== type(b)) return false;
  if (['NaN', 'Undefined', 'Null'].includes(aType)) return true;
  if (['Boolean', 'Number', 'String'].includes(aType)) return a.toString() === b.toString();

  if (aType === 'Array') {
    const aClone = Array.from(a);
    const bClone = Array.from(b);

    if (aClone.toString() !== bClone.toString()) {
      return false;
    }

    let loopArrayFlag = true;
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
          loopArrayFlag = false;
        }
      }
    });
    return loopArrayFlag;
  }

  const aRegex = parseRegex(a);
  const bRegex = parseRegex(b);

  if (aRegex[0]) {
    return bRegex[0] ? aRegex[1] === bRegex[1] : false;
  } else if (bRegex[0]) return false;

  const aDate = parseDate(a);
  const bDate = parseDate(b);

  if (aDate[0]) {
    return bDate[0] ? aDate[1] === bDate[1] : false;
  } else if (bDate[0]) return false;

  const aError = parseError(a);
  const bError = parseError(b);

  if (aError[0]) {
    return bError[0] ? aError[0] === bError[0] && aError[1] === bError[1] : false;
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {
      return false;
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
    return loopObjectFlag;
  }

  return false;
}

function includes(valueToFind, input) {
  if (arguments.length === 1) return _input => includes(valueToFind, _input);

  if (typeof input === 'string') {
    return input.includes(valueToFind);
  }

  if (!Array.isArray(input)) return false;
  let index = -1;

  while (++index < input.length) {
    if (equals(input[index], valueToFind)) {
      return true;
    }
  }

  return false;
}

function uniq(list) {
  let index = -1;
  const willReturn = [];

  while (++index < list.length) {
    const value = list[index];

    if (!includes(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function difference(a, b) {
  if (arguments.length === 1) return _b => difference(a, _b);
  return uniq(a).filter(aInstance => !includes(aInstance, b));
}

function dissoc(prop, obj) {
  if (arguments.length === 1) return _obj => dissoc(prop, _obj);
  if (obj === null || obj === undefined) return {};
  const willReturn = {};

  for (const p in obj) {
    willReturn[p] = obj[p];
  }

  delete willReturn[prop];
  return willReturn;
}

function divide(a, b) {
  if (arguments.length === 1) return _b => divide(a, _b);
  return a / b;
}

function drop(howManyToDrop, listOrString) {
  if (arguments.length === 1) return _list => drop(howManyToDrop, _list);
  return listOrString.slice(howManyToDrop > 0 ? howManyToDrop : 0);
}

function dropLast(howManyToDrop, listOrString) {
  if (arguments.length === 1) {
    return _listOrString => dropLast(howManyToDrop, _listOrString);
  }

  return howManyToDrop > 0 ? listOrString.slice(0, -howManyToDrop) : listOrString.slice();
}

function either(firstPredicate, secondPredicate) {
  if (arguments.length === 1) {
    return _secondPredicate => either(firstPredicate, _secondPredicate);
  }

  return (...input) => Boolean(firstPredicate(...input) || secondPredicate(...input));
}

function endsWith(target, str) {
  if (arguments.length === 1) return _str => endsWith(target, _str);
  return str.endsWith(target);
}

function filterObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    if (fn(obj[prop], prop, obj)) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(predicate, list) {
  if (arguments.length === 1) return _list => filter(predicate, _list);
  if (!list) return [];

  if (!Array.isArray(list)) {
    return filterObject(predicate, list);
  }

  let index = -1;
  let resIndex = 0;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];

    if (predicate(value, index)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function find(predicate, list) {
  if (arguments.length === 1) return _list => find(predicate, _list);
  return list.find(predicate);
}

function findIndex(predicate, list) {
  if (arguments.length === 1) return _list => findIndex(predicate, _list);
  const len = list.length;
  let index = -1;

  while (++index < len) {
    if (predicate(list[index], index)) {
      return index;
    }
  }

  return -1;
}

function findLast(predicate, list) {
  if (arguments.length === 1) return _list => findLast(predicate, _list);
  let index = list.length;

  while (--index >= 0) {
    if (predicate(list[index], index)) {
      return list[index];
    }
  }

  return undefined;
}

function findLastIndex(fn, list) {
  if (arguments.length === 1) return _list => findLastIndex(fn, _list);
  let index = list.length;

  while (--index >= 0) {
    if (fn(list[index], index)) {
      return index;
    }
  }

  return -1;
}

function flatten(list, input) {
  const willReturn = input === undefined ? [] : input;

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flatten(list[i], willReturn);
    } else {
      willReturn.push(list[i]);
    }
  }

  return willReturn;
}

function flipExport(fn) {
  const flipedFn = (...input) => {
    const missing = fn.length - input.length;
    if (missing <= 0) return fn(input[1], input[0], ...input.slice(2));
    if (input.length === 0) return flipedFn;
    if (input.length === 1) return curryN(missing, (...rest) => {
      const args = [rest[0], input[0], ...rest.slice(1)];
      return fn(...args);
    });
    return curryN(missing, (...rest) => {
      const args = [input[1], input[0], ...input.slice(2), ...rest];
      return fn(...args);
    });
  };

  return flipedFn;
}

function flip(fn) {
  return flipExport(fn);
}

function forEach(predicate, list) {
  if (arguments.length === 1) return _list => forEach(predicate, _list);
  map(predicate, list);
  return list;
}

function fromPairs(listOfPairs) {
  const toReturn = {};
  listOfPairs.forEach(([prop, value]) => toReturn[prop] = value);
  return toReturn;
}

function groupBy(groupFn, list) {
  if (arguments.length === 1) return _list => groupBy(groupFn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const key = groupFn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}

function groupWith(compareFn, list) {
  if (!Array.isArray(list)) throw new TypeError('list.reduce is not a function');
  const clone = list.slice();
  const toReturn = [];
  let holder = [];
  clone.reduce((prev, current, i) => {
    if (i === 0) return current;
    const okCompare = compareFn(prev, current);
    const holderIsEmpty = holder.length === 0;
    const lastCall = i === list.length - 1;

    if (okCompare) {
      if (holderIsEmpty) holder.push(prev);
      holder.push(current);
      if (lastCall) toReturn.push(holder);
      return current;
    }

    if (holderIsEmpty) {
      toReturn.push([prev]);
      if (lastCall) toReturn.push([current]);
      return current;
    }

    toReturn.push(holder);
    if (lastCall) toReturn.push([current]);
    holder = [];
    return current;
  }, undefined);
  return toReturn;
}

function has(prop, obj) {
  if (arguments.length === 1) return _obj => has(prop, _obj);
  if (!obj) return false;
  return obj[prop] !== undefined;
}

function path(list, obj) {
  if (arguments.length === 1) return _obj => path(list, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  let willReturn = obj;
  let counter = 0;
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }

    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
}

function hasPath(maybePath, obj) {
  if (arguments.length === 1) {
    return objHolder => hasPath(maybePath, objHolder);
  }

  return path(maybePath, obj) !== undefined;
}

function head(listOrString) {
  if (typeof listOrString === 'string') return listOrString[0] || '';
  return listOrString[0];
}

function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }

  return a !== a && b !== b;
}
var _objectIs$1 = Object.is || _objectIs;

function identical(a, b) {
  if (arguments.length === 1) return _b => identical(a, _b);
  return _objectIs$1(a, b);
}

function identity(input) {
  return input;
}

function ifElseFn(condition, onTrue, onFalse) {
  return (...input) => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(...input);

    if (conditionResult === true) {
      return onTrue(...input);
    }

    return onFalse(...input);
  };
}

const ifElse = curry(ifElseFn);

const inc = x => x + 1;

function indexByPath(pathInput, list) {
  const toReturn = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[path(pathInput, item)] = item;
  }

  return toReturn;
}

function indexBy(condition, list) {
  if (arguments.length === 1) {
    return _list => indexBy(condition, _list);
  }

  if (typeof condition === 'string') {
    return indexByPath(condition, list);
  }

  const toReturn = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[condition(item)] = item;
  }

  return toReturn;
}

function indexOf(valueToFind, list) {
  if (arguments.length === 1) {
    return _list => indexOf(valueToFind, _list);
  }

  let index = -1;
  const {
    length
  } = list;

  while (++index < length) {
    if (list[index] === valueToFind) {
      return index;
    }
  }

  return -1;
}

function baseSlice(array, start, end) {
  let index = -1;
  let {
    length
  } = array;
  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  const result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

function init(listOrString) {
  if (typeof listOrString === 'string') return listOrString.slice(0, -1);
  return listOrString.length ? baseSlice(listOrString, 0, -1) : [];
}

function intersection(listA, listB) {
  if (arguments.length === 1) return _list => intersection(listA, _list);
  return filter(value => includes(value, listB), listA);
}

function intersperse(separator, list) {
  if (arguments.length === 1) return _list => intersperse(separator, _list);
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

  return willReturn;
}

function is(targetPrototype, x) {
  if (arguments.length === 1) return _x => is(targetPrototype, _x);
  return x != null && x.constructor === targetPrototype || x instanceof targetPrototype;
}

function isEmpty(input) {
  const inputType = type(input);
  if (['Undefined', 'NaN', 'Number', 'Null'].includes(inputType)) return false;
  if (!input) return true;

  if (inputType === 'Object') {
    return Object.keys(input).length === 0;
  }

  if (inputType === 'Array') {
    return input.length === 0;
  }

  return false;
}

function isNil(x) {
  return x === undefined || x === null;
}

function join(glue, list) {
  if (arguments.length === 1) return _list => join(glue, _list);
  return list.join(glue);
}

function keys(x) {
  return Object.keys(x);
}

function last(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString[listOrString.length - 1] || '';
  }

  return listOrString[listOrString.length - 1];
}

function lastIndexOf(target, list) {
  if (arguments.length === 1) return _list => lastIndexOf(target, _list);
  let index = list.length;

  while (--index > 0) {
    if (equals(list[index], target)) {
      return index;
    }
  }

  return -1;
}

function length(x) {
  if (!x || x.length === undefined) {
    return NaN;
  }

  return x.length;
}

function lens(getter, setter) {
  if (arguments.length === 1) return _setter => lens(getter, _setter);
  return function (functor) {
    return function (target) {
      return functor(getter(target)).map(focus => setter(focus, target));
    };
  };
}

function nth(index, list) {
  if (arguments.length === 1) return _list => nth(index, _list);
  const idx = index < 0 ? list.length + index : index;
  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
}

function updateFn(index, newValue, list) {
  const arrClone = list.slice();
  return arrClone.fill(newValue, index, index + 1);
}

const update = curry(updateFn);

function lensIndex(index) {
  return lens(nth(index), update(index));
}

function lensPath(key) {
  return lens(path(key), assocPath(key));
}

function prop(propToFind, obj) {
  if (arguments.length === 1) return _obj => prop(propToFind, _obj);
  if (!obj) return undefined;
  return obj[propToFind];
}

function lensProp(key) {
  return lens(prop(key), assoc(key));
}

function match(pattern, input) {
  if (arguments.length === 1) return _input => match(pattern, _input);
  const willReturn = input.match(pattern);
  return willReturn === null ? [] : willReturn;
}

function mathMod(x, y) {
  if (arguments.length === 1) return _y => mathMod(x, _y);
  if (!_isInteger$1(x) || !_isInteger$1(y) || y < 1) return NaN;
  return (x % y + y) % y;
}

function maxByFn(compareFn, x, y) {
  return compareFn(y) > compareFn(x) ? y : x;
}
const maxBy = curry(maxByFn);

function sum(list) {
  return list.reduce((prev, current) => prev + current, 0);
}

function mean(list) {
  return sum(list) / list.length;
}

function median(list) {
  const len = list.length;
  if (len === 0) return NaN;
  const width = 2 - len % 2;
  const idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort((a, b) => {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }).slice(idx, idx + width));
}

function merge(target, newProps) {
  if (arguments.length === 1) return _newProps => merge(target, _newProps);
  return Object.assign({}, target || {}, newProps || {});
}

function min(x, y) {
  if (arguments.length === 1) return _y => min(x, _y);
  return y < x ? y : x;
}

function minByFn(compareFn, x, y) {
  return compareFn(y) < compareFn(x) ? y : x;
}
const minBy = curry(minByFn);

function modulo(x, y) {
  if (arguments.length === 1) return _y => modulo(x, _y);
  return x % y;
}

function multiply(x, y) {
  if (arguments.length === 1) return _y => multiply(x, _y);
  return x * y;
}

function negate(x) {
  return -x;
}

function none(predicate, list) {
  if (arguments.length === 1) return _list => none(predicate, _list);
  return list.filter(predicate).length === 0;
}

function not(input) {
  return !input;
}

function omit(propsToOmit, obj) {
  if (arguments.length === 1) return _obj => omit(propsToOmit, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const propsToOmitValue = typeof propsToOmit === 'string' ? propsToOmit.split(',') : propsToOmit;
  const willReturn = {};

  for (const key in obj) {
    if (!propsToOmitValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

const Identity = x => ({
  x,
  map: fn => Identity(fn(x))
});

function over(lens, fn, object) {
  if (arguments.length === 1) return (_fn, _object) => over(lens, _fn, _object);
  if (arguments.length === 2) return _object => over(lens, fn, _object);
  return lens(x => Identity(fn(x)))(object).x;
}

function partial(fn, ...args) {
  const len = fn.length;
  return (...rest) => {
    if (args.length + rest.length >= len) {
      return fn(...args, ...rest);
    }

    return partial(fn, ...[...args, ...rest]);
  };
}

function pathOrFn(defaultValue, list, obj) {
  return defaultTo(defaultValue, path(list, obj));
}

const pathOr = curry(pathOrFn);

function paths(pathsToSearch, obj) {
  if (arguments.length === 1) {
    return _obj => paths(pathsToSearch, _obj);
  }

  return pathsToSearch.map(singlePath => path(singlePath, obj));
}

function pick(propsToPick, input) {
  if (arguments.length === 1) return _input => pick(propsToPick, _input);

  if (input === null || input === undefined) {
    return undefined;
  }

  const keys = typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick;
  const willReturn = {};
  let counter = 0;

  while (counter < keys.length) {
    if (keys[counter] in input) {
      willReturn[keys[counter]] = input[keys[counter]];
    }

    counter++;
  }

  return willReturn;
}

function pickAll(propsToPick, obj) {
  if (arguments.length === 1) return _obj => pickAll(propsToPick, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick;
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

  return willReturn;
}

function pipe(...fns) {
  if (fns.length === 0) throw new Error('pipe requires at least one argument');
  return compose(...fns.reverse());
}

function pluck(property, list) {
  if (arguments.length === 1) return _list => pluck(property, _list);
  const willReturn = [];
  map(x => {
    if (x[property] !== undefined) {
      willReturn.push(x[property]);
    }
  }, list);
  return willReturn;
}

function prepend(x, listOrString) {
  if (arguments.length === 1) return _listOrString => prepend(x, _listOrString);
  if (typeof listOrString === 'string') return `${x}${listOrString}`;
  return [x].concat(listOrString);
}

const product = reduce(multiply, 1);

function propEqFn(propToFind, valueToMatch, obj) {
  if (!obj) return false;
  return obj[propToFind] === valueToMatch;
}

const propEq = curry(propEqFn);

function propIsFn(targetPrototype, property, obj) {
  return is(targetPrototype, obj[property]);
}

const propIs = curry(propIsFn);

function propOrFn(defaultValue, property, obj) {
  if (!obj) return defaultValue;
  return defaultTo(defaultValue, obj[property]);
}

const propOr = curry(propOrFn);

function range(start, end) {
  if (arguments.length === 1) return _end => range(start, _end);

  if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
    throw new TypeError('Both arguments to range must be numbers');
  }

  if (end < start) return [];
  const len = end - start;
  const willReturn = Array(len);

  for (let i = 0; i < len; i++) {
    willReturn[i] = start + i;
  }

  return willReturn;
}

function reject(predicate, list) {
  if (arguments.length === 1) return _list => reject(predicate, _list);
  return filter((x, i) => !predicate(x, i), list);
}

function repeat(x, timesToRepeat) {
  if (arguments.length === 1) {
    return _timesToRepeat => repeat(x, _timesToRepeat);
  }

  return Array(timesToRepeat).fill(x);
}

function replace(pattern, replacer, str) {
  if (replacer === undefined) {
    return (_replacer, _str) => replace(pattern, _replacer, _str);
  } else if (str === undefined) {
    return _str => replace(pattern, replacer, _str);
  }

  return str.replace(pattern, replacer);
}

function reverse(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString.split('').reverse().join('');
  }

  const clone = listOrString.slice();
  return clone.reverse();
}

function set(lens, replacer, x) {
  if (arguments.length === 1) return (_v, _x) => set(lens, _v, _x);
  if (arguments.length === 2) return _x => set(lens, replacer, _x);
  return over(lens, always(replacer), x);
}

function sliceFn(from, to, list) {
  return list.slice(from, to);
}

const slice = curry(sliceFn);

function sort(sortFn, list) {
  if (arguments.length === 1) return _list => sort(sortFn, _list);
  const clone = list.slice();
  return clone.sort(sortFn);
}

function sortBy(sortFn, list) {
  if (arguments.length === 1) return _list => sortBy(sortFn, _list);
  const clone = list.slice();
  return clone.sort((a, b) => {
    const aSortResult = sortFn(a);
    const bSortResult = sortFn(b);
    if (aSortResult === bSortResult) return 0;
    return aSortResult < bSortResult ? -1 : 1;
  });
}

function split(separator, str) {
  if (arguments.length === 1) return _str => split(separator, _str);
  return str.split(separator);
}

function splitEvery(sliceLength, listOrString) {
  if (arguments.length === 1) {
    return _listOrString => splitEvery(sliceLength, _listOrString);
  }

  if (sliceLength < 1) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }

  const willReturn = [];
  let counter = 0;

  while (counter < listOrString.length) {
    willReturn.push(listOrString.slice(counter, counter += sliceLength));
  }

  return willReturn;
}

function startsWith(target, str) {
  if (arguments.length === 1) return _str => startsWith(target, _str);
  return str.startsWith(target);
}

function subtract(a, b) {
  if (arguments.length === 1) return _b => subtract(a, _b);
  return a - b;
}

function symmetricDifference(x, y) {
  if (arguments.length === 1) {
    return _y => symmetricDifference(x, _y);
  }

  return concat(filter(value => !includes(value, y), x), filter(value => !includes(value, x), y));
}

function tail(listOrString) {
  return drop(1, listOrString);
}

function take(howMany, listOrString) {
  if (arguments.length === 1) return _listOrString => take(howMany, _listOrString);
  if (howMany < 0) return listOrString.slice();
  if (typeof listOrString === 'string') return listOrString.slice(0, howMany);
  return baseSlice(listOrString, 0, howMany);
}

function takeLast(howMany, listOrString) {
  if (arguments.length === 1) return _listOrString => takeLast(howMany, _listOrString);
  const len = listOrString.length;
  if (howMany < 0) return listOrString.slice();
  let numValue = howMany > len ? len : howMany;
  if (typeof listOrString === 'string') return listOrString.slice(len - numValue);
  numValue = len - numValue;
  return baseSlice(listOrString, numValue, len);
}

function tap(fn, x) {
  if (arguments.length === 1) return _x => tap(fn, _x);
  fn(x);
  return x;
}

function test(pattern, str) {
  if (arguments.length === 1) return _str => test(pattern, _str);

  if (typeof pattern === 'string') {
    throw new TypeError(`‘test’ requires a value of type RegExp as its first argument; received "${pattern}"`);
  }

  return str.search(pattern) !== -1;
}

function times(fn, howMany) {
  if (arguments.length === 1) return _howMany => times(fn, _howMany);

  if (!Number.isInteger(howMany) || howMany < 0) {
    throw new RangeError('n must be an integer');
  }

  return map(fn, range(0, howMany));
}

function toLower(str) {
  return str.toLowerCase();
}

function toPairs(obj) {
  return Object.entries(obj);
}

function toString(val) {
  return val.toString();
}

function toUpper(str) {
  return str.toUpperCase();
}

function transpose(array) {
  return array.reduce((acc, el) => {
    el.forEach((nestedEl, i) => Array.isArray(acc[i]) ? acc[i].push(nestedEl) : acc.push([nestedEl]));
    return acc;
  }, []);
}

function trim(str) {
  return str.trim();
}

function uniqWith(fn, list) {
  if (arguments.length === 1) return _list => uniqWith(fn, _list);
  let index = -1;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];
    const flag = any(willReturnInstance => fn(value, willReturnInstance), willReturn);

    if (!flag) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function values(obj) {
  if (type(obj) !== 'Object') return [];
  return Object.values(obj);
}

const Const = x => ({
  x,
  map: fn => Const(x)
});

function view(lens, target) {
  if (arguments.length === 1) return _target => view(lens, _target);
  return lens(Const)(target).x;
}

function isFunction(fn) {
  return ['Async', 'Promise', 'Function'].includes(type(fn));
}

function when(rule, resultOrFunction) {
  if (arguments.length === 1) {
    return whenTrueHolder => when(rule, whenTrueHolder);
  }

  return input => {
    if (!rule(input)) return input;
    return isFunction(resultOrFunction) ? resultOrFunction(input) : resultOrFunction;
  };
}

function without(matchAgainst, source) {
  if (source === undefined) {
    return _source => without(matchAgainst, _source);
  }

  return reduce((prev, current) => includes(current, matchAgainst) ? prev : prev.concat(current), [], source);
}

function xor(a, b) {
  if (arguments.length === 1) return _b => xor(a, _b);
  return Boolean(a) && !b || Boolean(b) && !a;
}

function zip(left, right) {
  if (arguments.length === 1) return _right => zip(left, _right);
  const result = [];
  const length = Math.min(left.length, right.length);

  for (let i = 0; i < length; i++) {
    result[i] = [left[i], right[i]];
  }

  return result;
}

function zipObj(keys, values) {
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder);
  return take(values.length, keys).reduce((prev, xInstance, i) => {
    prev[xInstance] = values[i];
    return prev;
  }, {});
}

exports.F = F;
exports.T = T;
exports.add = add;
exports.adjust = adjust;
exports.all = all;
exports.allPass = allPass;
exports.always = always;
exports.and = and;
exports.any = any;
exports.anyPass = anyPass;
exports.append = append;
exports.applySpec = applySpec;
exports.assoc = assoc;
exports.assocPath = assocPath;
exports.both = both;
exports.chain = chain;
exports.clamp = clamp;
exports.clone = clone;
exports.complement = complement;
exports.compose = compose;
exports.concat = concat;
exports.cond = cond;
exports.converge = converge;
exports.curry = curry;
exports.curryN = curryN;
exports.dec = dec;
exports.defaultTo = defaultTo;
exports.difference = difference;
exports.dissoc = dissoc;
exports.divide = divide;
exports.drop = drop;
exports.dropLast = dropLast;
exports.either = either;
exports.endsWith = endsWith;
exports.equals = equals;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.findLast = findLast;
exports.findLastIndex = findLastIndex;
exports.flatten = flatten;
exports.flip = flip;
exports.forEach = forEach;
exports.fromPairs = fromPairs;
exports.groupBy = groupBy;
exports.groupWith = groupWith;
exports.has = has;
exports.hasPath = hasPath;
exports.head = head;
exports.identical = identical;
exports.identity = identity;
exports.ifElse = ifElse;
exports.inc = inc;
exports.includes = includes;
exports.indexBy = indexBy;
exports.indexOf = indexOf;
exports.init = init;
exports.intersection = intersection;
exports.intersperse = intersperse;
exports.is = is;
exports.isEmpty = isEmpty;
exports.isNil = isNil;
exports.join = join;
exports.keys = keys;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.length = length;
exports.lens = lens;
exports.lensIndex = lensIndex;
exports.lensPath = lensPath;
exports.lensProp = lensProp;
exports.map = map;
exports.match = match;
exports.mathMod = mathMod;
exports.max = max;
exports.maxBy = maxBy;
exports.maxByFn = maxByFn;
exports.mean = mean;
exports.median = median;
exports.merge = merge;
exports.min = min;
exports.minBy = minBy;
exports.minByFn = minByFn;
exports.modulo = modulo;
exports.multiply = multiply;
exports.negate = negate;
exports.none = none;
exports.not = not;
exports.nth = nth;
exports.omit = omit;
exports.over = over;
exports.partial = partial;
exports.path = path;
exports.pathOr = pathOr;
exports.paths = paths;
exports.pick = pick;
exports.pickAll = pickAll;
exports.pipe = pipe;
exports.pluck = pluck;
exports.prepend = prepend;
exports.product = product;
exports.prop = prop;
exports.propEq = propEq;
exports.propIs = propIs;
exports.propOr = propOr;
exports.range = range;
exports.reduce = reduce;
exports.reject = reject;
exports.repeat = repeat;
exports.replace = replace;
exports.reverse = reverse;
exports.set = set;
exports.slice = slice;
exports.sort = sort;
exports.sortBy = sortBy;
exports.split = split;
exports.splitEvery = splitEvery;
exports.startsWith = startsWith;
exports.subtract = subtract;
exports.sum = sum;
exports.symmetricDifference = symmetricDifference;
exports.tail = tail;
exports.take = take;
exports.takeLast = takeLast;
exports.tap = tap;
exports.test = test;
exports.times = times;
exports.toLower = toLower;
exports.toPairs = toPairs;
exports.toString = toString;
exports.toUpper = toUpper;
exports.transpose = transpose;
exports.trim = trim;
exports.type = type;
exports.uniq = uniq;
exports.uniqWith = uniqWith;
exports.update = update;
exports.values = values;
exports.view = view;
exports.when = when;
exports.without = without;
exports.xor = xor;
exports.zip = zip;
exports.zipObj = zipObj;
