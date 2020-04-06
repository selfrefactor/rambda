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

function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

function adjustFn(index, fn, list) {
  const actualIndex = index < 0 ? list.length + index : index;
  if (index >= list.length || actualIndex < 0) return list;
  const clone = list.slice();
  clone[actualIndex] = fn(clone[actualIndex]);
  return clone;
}

const adjust = curry(adjustFn);

function all(fn, list) {
  if (arguments.length === 1) return _list => all(fn, _list);

  for (let i = 0; i < list.length; i++) {
    if (!fn(list[i], i)) return false;
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

function any(fn, list) {
  if (arguments.length === 1) return _list => any(fn, _list);
  let counter = 0;

  while (counter < list.length) {
    if (fn(list[counter], counter)) {
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

function append(el, list) {
  if (arguments.length === 1) return _list => append(el, _list);
  if (typeof list === 'string') return `${list}${el}`;
  const clone = list.slice();
  clone.push(el);
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

function assocFn(prop, val, obj) {
  return Object.assign({}, obj, {
    [prop]: val
  });
}

const assoc = curry(assocFn);

function _isInteger(n) {
  return n << 0 === n;
}
var _isInteger$1 = Number.isInteger || _isInteger;

function assocPathFn(list, val, input) {
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;

  if (pathArrValue.length === 0) {
    return val;
  }

  const index = pathArrValue[0];

  if (pathArrValue.length > 1) {
    const condition = typeof input !== 'object' || input === null || !input.hasOwnProperty(index);
    const nextinput = condition ? _isInteger(parseInt(pathArrValue[1], 10)) ? [] : {} : input[index];
    val = assocPathFn(Array.prototype.slice.call(pathArrValue, 1), val, nextinput);
  }

  if (_isInteger(parseInt(index, 10)) && Array.isArray(input)) {
    const arr = input.slice();
    arr[index] = val;
    return arr;
  }

  return assoc(index, val, input);
}

const assocPath = curry(assocPathFn);

function both(f, g) {
  if (arguments.length === 1) return _g => both(f, _g);
  return (...input) => f(...input) && g(...input);
}

function clone(val) {
  const out = Array.isArray(val) ? Array(val.length) : {};
  if (val && val.getTime) return new Date(val.getTime());

  for (const key in val) {
    const v = val[key];
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

function concat(left, right) {
  if (arguments.length === 1) return _right => concat(left, _right);
  return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
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

function max(a, b) {
  if (arguments.length === 1) return _b => max(a, _b);
  return b > a ? b : a;
}

function reduceFn(fn, acc, list) {
  return list.reduce(fn, acc);
}

const reduce = curry(reduceFn);

function converge(fn, transformers) {
  if (arguments.length === 1) return _transformers => converge(fn, _transformers);
  const highestArity = reduce((a, b) => max(a, b.length), 0, transformers);
  return curryN(highestArity, function () {
    return fn.apply(this, map(g => g.apply(this, arguments), transformers));
  });
}

function clampFn(lowLimit, highLimit, input) {
  if (input >= lowLimit && input <= highLimit) return input;
  if (input > highLimit) return highLimit;
  if (input < lowLimit) return lowLimit;
}

const clamp = curry(clampFn);

const dec = n => n - 1;

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

function includes(target, list) {
  if (arguments.length === 1) return _input => includes(target, _input);

  if (typeof list === 'string') {
    return list.includes(target);
  }

  if (!Array.isArray(list)) return false;
  let index = -1;

  while (++index < list.length) {
    if (equals(list[index], target)) {
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

function difference(list1, list2) {
  if (arguments.length === 1) return _list => difference(list1, _list);
  return uniq(list1).filter(x1 => !includes(x1, list2));
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

function drop(n, listOrString) {
  if (arguments.length === 1) return _list => drop(n, _list);
  return listOrString.slice(n > 0 ? n : 0);
}

function dropLast(n, list) {
  if (arguments.length === 1) return _list => dropLast(n, _list);
  return n > 0 ? list.slice(0, -n) : list.slice();
}

function either(f, g) {
  if (arguments.length === 1) return _g => either(f, _g);
  return (...input) => f(...input) || g(...input);
}

function endsWith(suffix, list) {
  if (arguments.length === 1) return _list => endsWith(suffix, _list);
  return list.endsWith(suffix);
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

function filter(fn, list) {
  if (arguments.length === 1) return _list => filter(fn, _list);
  if (!list) return [];

  if (!Array.isArray(list)) {
    return filterObject(fn, list);
  }

  let index = -1;
  let resIndex = 0;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];

    if (fn(value, index)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function find(fn, list) {
  if (arguments.length === 1) return _list => find(fn, _list);
  return list.find(fn);
}

function findIndex(fn, list) {
  if (arguments.length === 1) return _list => findIndex(fn, _list);
  const len = list.length;
  let index = -1;

  while (++index < len) {
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
  return (...input) => {
    if (input.length === 1) {
      return holder => fn(holder, input[0]);
    } else if (input.length === 2) {
      return fn(input[1], input[0]);
    }

    return undefined;
  };
}

function flip(fn) {
  return flipExport(fn);
}

function forEach(fn, list) {
  if (arguments.length === 1) return _list => forEach(fn, _list);
  map(fn, list);
  return list;
}

function fromPairs(list) {
  const toReturn = {};
  list.forEach(([prop, value]) => toReturn[prop] = value);
  return toReturn;
}

function groupBy(fn, list) {
  if (arguments.length === 1) return _list => groupBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}

function groupWith(predicate, list) {
  if (!Array.isArray(list)) throw new TypeError('list.reduce is not a function');
  const clone = list.slice();
  const toReturn = [];
  let holder = [];
  clone.reduce((prev, current, i) => {
    if (i === 0) return current;
    const okPredicate = predicate(prev, current);
    const holderIsEmpty = holder.length === 0;
    const initialState = toReturn.length === 0;
    const lastCall = i === list.length - 1;

    if (initialState) {
      if (okPredicate) {
        if (lastCall) {
          toReturn.push([...holder, prev, current]);
          return current;
        }

        holder.push(prev);
        return current;
      }

      if (lastCall) {
        toReturn.push([...holder, prev]);
        toReturn.push([current]);
        return current;
      }

      toReturn.push([...holder, prev]);
      holder = [];
      return current;
    }

    if (lastCall) {
      if (okPredicate) {
        toReturn.push([...holder, prev, current]);
        return current;
      }

      if (holderIsEmpty) {
        toReturn.push([prev]);
        toReturn.push([current]);
        return current;
      }

      toReturn.push([...holder, prev]);
      toReturn.push([current]);
      return current;
    }

    if (okPredicate) {
      holder.push(current);
      return current;
    }

    if (holderIsEmpty) {
      toReturn.push([prev]);
      return current;
    }

    toReturn.push([...holder, prev]);
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

function head(list) {
  if (typeof list === 'string') return list[0] || '';
  return list[0];
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

function identity(x) {
  return x;
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

const inc = n => n + 1;

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

function indexByPath(pathInput, list) {
  const toReturn = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[path(pathInput, item)] = item;
  }

  return toReturn;
}

function indexBy(fnOrPath, list) {
  if (arguments.length === 1) {
    return _list => indexBy(fnOrPath, _list);
  }

  if (typeof fnOrPath === 'string') {
    return indexByPath(fnOrPath, list);
  }

  const toReturn = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[fnOrPath(item)] = item;
  }

  return toReturn;
}

function indexOf(target, list) {
  if (arguments.length === 1) return _list => indexOf(target, _list);
  let index = -1;
  const {
    length
  } = list;

  while (++index < length) {
    if (list[index] === target) {
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

function init(list) {
  if (typeof list === 'string') return list.slice(0, -1);
  return list.length ? baseSlice(list, 0, -1) : [];
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

function intersection(list1, list2) {
  if (arguments.length === 1) return _list => intersection(list1, _list);
  return filter(value => includes(value, list2), list1);
}

function is(ctor, val) {
  if (arguments.length === 1) return _val => is(ctor, _val);
  return val != null && val.constructor === ctor || val instanceof ctor;
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

function join(separator, list) {
  if (arguments.length === 1) return _list => join(separator, _list);
  return list.join(separator);
}

function keys(obj) {
  return Object.keys(obj);
}

function last(list) {
  if (typeof list === 'string') return list[list.length - 1] || '';
  return list[list.length - 1];
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

function length(list) {
  if (!list || list.length === undefined) {
    return NaN;
  }

  return list.length;
}

function lens(getter, setter) {
  if (arguments.length === 1) return _setter => lens(getter, _setter);
  return function (functor) {
    return function (target) {
      return functor(getter(target)).map(focus => setter(focus, target));
    };
  };
}

function nth(offset, list) {
  if (arguments.length === 1) return _list => nth(offset, _list);
  const idx = offset < 0 ? list.length + offset : offset;
  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
}

function update(idx, val, list) {
  if (val === undefined) {
    return (_val, _list) => update(idx, _val, _list);
  } else if (list === undefined) {
    return _list => update(idx, val, _list);
  }

  const arrClone = list.slice();
  return arrClone.fill(val, idx, idx + 1);
}

function lensIndex(i) {
  return lens(nth(i), update(i));
}

function lensPath(key) {
  return lens(path(key), assocPath(key));
}

function prop(key, obj) {
  if (arguments.length === 1) return _obj => prop(key, _obj);
  if (!obj) return undefined;
  return obj[key];
}

function lensProp(key) {
  return lens(prop(key), assoc(key));
}

function match(pattern, str) {
  if (arguments.length === 1) return _str => match(pattern, _str);
  const willReturn = str.match(pattern);
  return willReturn === null ? [] : willReturn;
}

function mathMod(m, p) {
  if (arguments.length === 1) return _p => mathMod(m, _p);
  if (!_isInteger$1(m) || !_isInteger$1(p) || p < 1) return NaN;
  return (m % p + p) % p;
}

function maxBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => maxBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => maxBy(fn, _a, _b);
  }

  return fn(b) > fn(a) ? b : a;
}

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

function merge(obj, props) {
  if (arguments.length === 1) return _props => merge(obj, _props);
  return Object.assign({}, obj || {}, props || {});
}

function min(a, b) {
  if (arguments.length === 1) return _b => min(a, _b);
  return b < a ? b : a;
}

function minBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => minBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => minBy(fn, _a, _b);
  }

  return fn(b) < fn(a) ? b : a;
}

function modulo(a, b) {
  if (arguments.length === 1) return _b => modulo(a, _b);
  return a % b;
}

function multiply(a, b) {
  if (arguments.length === 1) return _b => multiply(a, _b);
  return a * b;
}

function negate(n) {
  return -n;
}

function none(fn, list) {
  if (arguments.length === 1) return _list => none(fn, _list);
  return list.filter(fn).length === 0;
}

function not(a) {
  return !a;
}

function omit(keys, obj) {
  if (arguments.length === 1) return _obj => omit(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};

  for (const key in obj) {
    if (!keysValue.includes(key)) {
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

function paths(pathsInput, obj) {
  return pathsInput.map(singlePath => path(singlePath, obj));
}

function pathOrRaw(defaultValue, list, obj) {
  return defaultTo(defaultValue, path(list, obj));
}

const pathOr = curry(pathOrRaw);

function pick(keys, obj) {
  if (arguments.length === 1) return _obj => pick(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    }

    counter++;
  }

  return willReturn;
}

function pickAll(keys, obj) {
  if (arguments.length === 1) return _obj => pickAll(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
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

function pluck(key, list) {
  if (arguments.length === 1) return _list => pluck(key, _list);
  const willReturn = [];
  map(val => {
    if (val[key] !== undefined) {
      willReturn.push(val[key]);
    }
  }, list);
  return willReturn;
}

function prepend(el, list) {
  if (arguments.length === 1) return _list => prepend(el, _list);
  if (typeof list === 'string') return `${el}${list}`;
  const clone = [el].concat(list);
  return clone;
}

const product = reduce(multiply, 1);

function propEqFn(key, val, obj) {
  if (!obj) return false;
  return obj[key] === val;
}

const propEq = curry(propEqFn);

function propIsFn(type, name, obj) {
  return is(type, obj[name]);
}

const propIs = curry(propIsFn);

function propOr(defaultValue, p, obj) {
  if (arguments.length === 2) return _obj => propOr(defaultValue, p, _obj);
  if (arguments.length === 1) return (_p, _obj) => propOr(defaultValue, _p, _obj);
  if (!obj) return defaultValue;
  return defaultTo(defaultValue, obj[p]);
}

function range(from, to) {
  if (arguments.length === 1) return _to => range(from, _to);

  if (Number.isNaN(Number(from)) || Number.isNaN(Number(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }

  if (to < from) return [];
  const len = to - from;
  const willReturn = Array(len);

  for (let i = 0; i < len; i++) {
    willReturn[i] = from + i;
  }

  return willReturn;
}

function reject(fn, list) {
  if (arguments.length === 1) return _list => reject(fn, _list);
  return filter((x, i) => !fn(x, i), list);
}

function repeat(val, n) {
  if (arguments.length === 1) return _n => repeat(val, _n);
  const willReturn = Array(n);
  return willReturn.fill(val);
}

function replace(pattern, replacer, str) {
  if (replacer === undefined) {
    return (_replacer, _str) => replace(pattern, _replacer, _str);
  } else if (str === undefined) {
    return _str => replace(pattern, replacer, _str);
  }

  return str.replace(pattern, replacer);
}

function reverse(input) {
  if (typeof input === 'string') {
    return input.split('').reverse().join('');
  }

  const clone = input.slice();
  return clone.reverse();
}

function set(lens, v, x) {
  if (arguments.length === 1) return (_v, _x) => set(lens, _v, _x);
  if (arguments.length === 2) return _x => set(lens, v, _x);
  return over(lens, always(v), x);
}

function sliceFn(fromIndex, toIndex, list) {
  return list.slice(fromIndex, toIndex);
}

const slice = curry(sliceFn);

function sort(fn, list) {
  if (arguments.length === 1) return _list => sort(fn, _list);
  const arrClone = list.slice();
  return arrClone.sort(fn);
}

function sortBy(fn, list) {
  if (arguments.length === 1) return _list => sortBy(fn, _list);
  const arrClone = list.slice();
  return arrClone.sort((a, b) => {
    const fnA = fn(a);
    const fnB = fn(b);
    if (fnA === fnB) return 0;
    return fnA < fnB ? -1 : 1;
  });
}

function split(separator, str) {
  if (arguments.length === 1) return _str => split(separator, _str);
  return str.split(separator);
}

function splitEvery(n, list) {
  if (arguments.length === 1) return _list => splitEvery(n, _list);
  if (n < 1) throw new Error('First argument to splitEvery must be a positive integer');
  const willReturn = [];
  let counter = 0;

  while (counter < list.length) {
    willReturn.push(list.slice(counter, counter += n));
  }

  return willReturn;
}

function startsWith(prefix, list) {
  if (arguments.length === 1) return _list => startsWith(prefix, _list);
  return list.startsWith(prefix);
}

function subtract(a, b) {
  if (arguments.length === 1) return _b => subtract(a, _b);
  return a - b;
}

function symmetricDifference(list1, list2) {
  if (arguments.length === 1) return _list => symmetricDifference(list1, _list);
  return concat(filter(value => !includes(value, list2), list1), filter(value => !includes(value, list1), list2));
}

function tail(list) {
  return drop(1, list);
}

function take(n, list) {
  if (arguments.length === 1) return _list => take(n, _list);
  if (n < 0) return list.slice();
  if (typeof list === 'string') return list.slice(0, n);
  return baseSlice(list, 0, n);
}

function takeLast(n, list) {
  if (arguments.length === 1) return _list => takeLast(n, _list);
  const len = list.length;
  if (n < 0) return list.slice();
  let numValue = n > len ? len : n;
  if (typeof list === 'string') return list.slice(len - numValue);
  numValue = len - numValue;
  return baseSlice(list, numValue, len);
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

function times(fn, n) {
  if (arguments.length === 1) return _n => times(fn, _n);
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be an integer');
  return map(fn, range(0, n));
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

function without(left, right) {
  if (right === undefined) {
    return _right => without(left, _right);
  }

  return reduce((accum, item) => includes(item, left) ? accum : accum.concat(item), [], right);
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

function xor(a, b) {
  if (arguments.length === 1) return _b => xor(a, _b);
  return Boolean(a) && !b || Boolean(b) && !a;
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
exports.flatten = flatten;
exports.flip = flip;
exports.forEach = forEach;
exports.fromPairs = fromPairs;
exports.groupBy = groupBy;
exports.groupWith = groupWith;
exports.has = has;
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
exports.mean = mean;
exports.median = median;
exports.merge = merge;
exports.min = min;
exports.minBy = minBy;
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
exports.without = without;
exports.xor = xor;
exports.zip = zip;
exports.zipObj = zipObj;
