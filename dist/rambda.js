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

function adjustRaw(fn, idx, list) {
  const clone = list.slice();
  const actualIndex = idx < 0 ? clone.length + idx : idx;
  clone[actualIndex] = fn(clone[actualIndex]);
  return clone;
}

const adjust = curry(adjustRaw);

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

function always(val) {
  return () => val;
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
  const clone = list.concat();
  clone.push(el);
  return clone;
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

function assocPathFn(list, val, obj) {
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;

  if (pathArrValue.length === 0) {
    return obj;
  }

  const index = pathArrValue[0];

  if (pathArrValue.length > 1) {
    const nextObj = typeof obj !== "object" || !obj.hasOwnProperty(index) ? _isInteger(parseInt(pathArrValue[1], 10)) ? [] : {} : obj[index];
    val = assocPathFn(Array.prototype.slice.call(pathArrValue, 1), val, nextObj);
  }

  if (_isInteger(parseInt(index, 10)) && Array.isArray(obj)) {
    const arr = [].concat(obj);
    arr[index] = val;
    return arr;
  } else {
    return assoc(index, val, obj);
  }
}

const assocPath = curry(assocPathFn);

function both(f, g) {
  if (arguments.length === 1) return _g => both(f, _g);
  return (...input) => f(...input) && g(...input);
}

function clone(val) {
  const out = Array.isArray(val) ? Array(val.length) : {};

  for (const key in val) {
    const v = val[key];
    out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
  }

  return out;
}

function complement(fn) {
  return input => !fn(input);
}

function compose(...fns) {
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

    return undefined;
  };
}

function concat(left, right) {
  if (arguments.length === 1) return _right => concat(left, _right);
  return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
}

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

  if (list === undefined) {
    return [];
  }

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

function type(val) {
  const typeOf = typeof val;

  if (val === null) {
    return 'Null';
  } else if (val === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return Number.isNaN(val) ? 'NaN' : 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(val)) {
    return 'Array';
  } else if (val instanceof RegExp) {
    return 'RegExp';
  }

  const asStr = val.toString();

  if (asStr.startsWith('async')) {
    return 'Async';
  } else if (asStr === '[object Promise]') {
    return 'Promise';
  } else if (typeOf === 'function') {
    return 'Function';
  }

  return 'Object';
}

function equals(a, b) {
  if (arguments.length === 1) return _b => equals(a, _b);

  if (a === b) {
    return true;
  }

  const aType = type(a);

  if (aType !== type(b)) {
    return false;
  }

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

function difference(list1, list2) {
  if (arguments.length === 1) return _list => difference(list1, _list);
  return filter(value => !includes(value, list2), list1);
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

function drop(n, list) {
  if (arguments.length === 1) return _list => drop(n, _list);
  return list.slice(n);
}

function dropLast(n, list) {
  if (arguments.length === 1) return _list => dropLast(n, _list);
  return list.slice(0, -n);
}

function either(f, g) {
  if (arguments.length === 1) return _g => either(f, _g);
  return (...input) => f(...input) || g(...input);
}

function endsWith(suffix, list) {
  if (arguments.length === 1) return _list => endsWith(suffix, _list);
  return list.endsWith(suffix);
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
  const toReturn = [];
  let holder = [];
  list.reduce((prev, current, i) => {
    if (i > 0 && predicate(prev, current)) {
      if (holder.length === 0) {
        holder.push(prev);
        holder.push(current);
      } else {
        holder.push(current);
      }
    } else if (i > 0) {
      if (holder.length === 0) {
        toReturn.push([prev]);
        if (i === list.length - 1) holder.push(current);
      } else {
        toReturn.push(holder);
        holder = [];
      }
    }

    return current;
  }, undefined);
  return holder.length === 0 ? toReturn : [...toReturn, holder];
}

function has(prop, obj) {
  if (arguments.length === 1) return _obj => has(prop, _obj);
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

function ifElse(condition, onTrue, onFalse) {
  if (onTrue === undefined) {
    return (_onTrue, _onFalse) => ifElse(condition, _onTrue, _onFalse);
  } else if (onFalse === undefined) {
    return _onFalse => ifElse(condition, onTrue, _onFalse);
  }

  return input => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(input);

    if (conditionResult === true) {
      return onTrue(input);
    }

    return onFalse(input);
  };
}

const inc = n => n + 1;

function indexBy(fn, list) {
  if (arguments.length === 1) return _list => indexBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    result[fn(item)] = item;
  }

  return result;
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

function isEmpty(x) {
  if (Number.isFinite(x) || !x) {
    return true;
  }

  if (Array.isArray(x)) {
    return x.length === 0;
  }

  return Object.keys(x).length === 0;
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
  return list.length;
}

function match(pattern, str) {
  if (arguments.length === 1) return _str => match(pattern, _str);
  const willReturn = str.match(pattern);
  return willReturn === null ? [] : willReturn;
}

function mathMod(m, p) {
  if (arguments.length === 1) return p => mathMod(_m, p);
  if (!_isInteger$1(m) || !_isInteger$1(p) || p < 1) return NaN;
  return (m % p + p) % p;
}

function max(a, b) {
  if (arguments.length === 1) return _b => max(a, _b);
  return b > a ? b : a;
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

function nth(offset, list) {
  if (arguments.length === 1) return _list => nth(offset, _list);
  const idx = offset < 0 ? list.length + offset : offset;
  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
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

function partial(fn, ...args) {
  const len = fn.length;
  return (...rest) => {
    if (args.length + rest.length >= len) {
      return fn(...args, ...rest);
    }

    return partial(fn, ...[...args, ...rest]);
  };
}

function partialCurry(fn, args = {}) {
  return rest => {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((resolve, reject) => {
        fn(merge(rest, args)).then(resolve).catch(reject);
      });
    }

    return fn(merge(rest, args));
  };
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

function reduceFn(fn, acc, list) {
  return list.reduce(fn, acc);
}

const reduce = curry(reduceFn);

const product = reduce(multiply, 1);

function prop(key, obj) {
  if (arguments.length === 1) return _obj => prop(key, _obj);
  if (!obj) return undefined;
  return obj[key];
}

function propEq(key, val, obj) {
  if (val === undefined) {
    return (_val, _obj) => propEq(key, _val, _obj);
  } else if (obj === undefined) {
    return _obj => propEq(key, val, _obj);
  }

  return obj[key] === val;
}

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

function reverse(list) {
  const clone = list.concat();
  return clone.reverse();
}

function slice(fromIndex, toIndex, list) {
  if (arguments.length === 2) return (_toIndex, _list) => slice(fromIndex, _toIndex, _list);
  if (arguments.length === 1) return _list => slice(fromIndex, toIndex, _list);
  return list.slice(fromIndex, toIndex);
}

function sort(fn, list) {
  if (arguments.length === 1) return _list => sort(fn, _list);
  const arrClone = list.concat();
  return arrClone.sort(fn);
}

function sortBy(fn, list) {
  if (arguments.length === 1) return _list => sortBy(fn, _list);
  const arrClone = list.concat();
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
  const numValue = n > 1 ? n : 1;
  const willReturn = [];
  let counter = 0;

  while (counter < list.length) {
    willReturn.push(list.slice(counter, counter += numValue));
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
  if (typeof list === 'string') return list.slice(0, n);
  return baseSlice(list, 0, n);
}

function takeLast(n, list) {
  if (arguments.length === 1) return _list => takeLast(n, _list);
  const len = list.length;
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
  return str.search(pattern) !== -1;
}

function times(fn, n) {
  if (arguments.length === 1) return _n => times(fn, _n);
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

function trim(str) {
  return str.trim();
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

function update(idx, val, list) {
  if (val === undefined) {
    return (_val, _list) => update(idx, _val, _list);
  } else if (list === undefined) {
    return _list => update(idx, val, _list);
  }

  const arrClone = list.concat();
  return arrClone.fill(val, idx, idx + 1);
}

function values(obj) {
  return Object.values(obj);
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

function zipObj(keys, values) {
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder);
  return keys.reduce((prev, xInstance, i) => {
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
exports.any = any;
exports.anyPass = anyPass;
exports.append = append;
exports.assoc = assoc;
exports.assocPath = assocPath;
exports.both = both;
exports.clone = clone;
exports.complement = complement;
exports.compose = compose;
exports.concat = concat;
exports.curry = curry;
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
exports.partial = partial;
exports.partialCurry = partialCurry;
exports.path = path;
exports.pathOr = pathOr;
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
exports.trim = trim;
exports.type = type;
exports.uniq = uniq;
exports.uniqWith = uniqWith;
exports.update = update;
exports.values = values;
exports.without = without;
exports.zip = zip;
exports.zipObj = zipObj;
