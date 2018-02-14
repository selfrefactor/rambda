(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.R = {})));
}(this, (function (exports) { 'use strict';

function add(x, y) {
  if (y === undefined) {
    return yHolder => add(x, yHolder);
  }

  return x + y;
}

function addIndex(functor) {
  return function (fn, ...rest) {
    let cnt = 0;
    const newFn = (...args) => fn.apply(null, [...args, cnt++]);

    return functor.apply(null, [newFn, ...rest]);
  };
}

function adjust(fn, index, arr) {
  if (index === undefined) {
    return (indexHolder, arrHolder) => adjust(fn, indexHolder, arrHolder);
  } else if (arr === undefined) {
    return arrHolder => adjust(fn, index, arrHolder);
  }

  const clone = arr.concat();

  return clone.map((val, key) => {
    if (key === index) {
      return fn(arr[index]);
    }

    return val;
  });
}

function filterObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    if (fn(obj[prop], prop)) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(fn, arr) {
  if (arr === undefined) {
    return arrHolder => filter(fn, arrHolder);
  }

  if (arr.length === undefined) {
    return filterObject(fn, arr);
  }
  let index = -1;
  let resIndex = 0;
  const len = arr.length;
  const willReturn = [];

  while (++index < len) {
    const value = arr[index];

    if (fn(value)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function all(condition, arr) {
  if (arr === undefined) {
    return arrHolder => all(condition, arrHolder);
  }

  return filter(condition, arr).length === arr.length;
}

function any(fn, arr) {
  if (arr === undefined) {
    return arrHolder => any(fn, arrHolder);
  }
  let counter = 0;

  while (counter < arr.length) {
    if (fn(arr[counter])) {
      return true;
    }
    counter++;
  }

  return false;
}

function allPass(conditions, x) {
  if (arguments.length === 1) {
    return xHolder => allPass(conditions, xHolder);
  }

  return !any(condition => !condition(x), conditions);
}

function anyPass(conditions, x) {
  if (arguments.length === 1) {
    return xHolder => anyPass(conditions, xHolder);
  }

  return any(condition => condition(x))(conditions);
}

function always(x) {
  return () => x;
}

function append(x, arr) {
  if (arr === undefined) {
    return arrHolder => append(x, arrHolder);
  }
  if (typeof arr === 'string') {
    return `${arr}${x}`;
  }
  const clone = arr.concat();

  clone.push(x);

  return clone;
}

function both(x, y) {
  if (y === undefined) {
    return yHolder => both(x, yHolder);
  }

  return input => x(input) && y(input);
}

function complement(fn) {
  return input => !fn(input);
}

//Taken from https://github.com/getify/Functional-Light-JS/blob/master/ch4.md
function compose(...fns) {
  return result => {
    const list = fns.slice();

    while (list.length > 0) {
      result = list.pop()(result);
    }

    return result;
  };
}

function concat(x, y) {
  if (y === undefined) {
    return yHolder => concat(x, yHolder);
  }

  return typeof x === 'string' ? `${x}${y}` : [...x, ...y];
}

function type(a) {
  const typeOf = typeof a;

  if (a === null) {
    return 'Null';
  } else if (a === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(a)) {
    return 'Array';
  } else if (a instanceof RegExp) {
    return 'RegExp';
  }

  const asStr = a.toString();

  if (asStr.startsWith('async')) {
    return 'Async';
  } else if (asStr === '[object Promise]') {
    return 'Promise';
  } else if (asStr.includes('function') || asStr.includes('=>')) {
    return 'Function';
  }

  return 'Object';
}

function equals(a, b) {
  if (arguments.length === 1) {
    return bHolder => equals(a, bHolder);
  }

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

function contains(x, arr) {
  if (arr === undefined) {
    return arrHolder => contains(x, arrHolder);
  }
  let index = -1;
  let flag = false;

  while (++index < arr.length && !flag) {
    if (equals(arr[index], x)) {
      flag = true;
    }
  }

  return flag;
}

//taken from the last comment of https://gist.github.com/mkuklis/5294248

function curry(f, a = []) {
  return (...p) => (o => o.length >= f.length ? f(...o) : curry(f, o))([...a, ...p]);
}

var dec = (x => x - 1);

function defaultTo(defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return inputArgumentHolder => defaultTo(defaultArgument, inputArgumentHolder);
  }

  return inputArgument === undefined || inputArgument === null || Number.isNaN(inputArgument) === true ? defaultArgument : inputArgument;
}

function omit(keys, obj) {
  if (arguments.length === 1) {
    return objHolder => omit(keys, objHolder);
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys = keys.split(',') : keys;

  const willReturn = {};

  for (const key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

function dissoc(prop, obj) {
  if (arguments.length === 1) {

    return objHolder => dissoc(prop, objHolder);
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  const willReturn = {};

  for (const key in obj) {
    if (key !== `${prop}`) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

function divide(x, y) {
  if (y === undefined) {
    return yHolder => divide(x, yHolder);
  }

  return x / y;
}

function drop(dropNumber, x) {
  if (x === undefined) {
    return xHolder => drop(dropNumber, xHolder);
  }

  return x.slice(dropNumber);
}

function dropLast(dropNumber, x) {
  if (x === undefined) {
    return xHolder => dropLast(dropNumber, xHolder);
  }

  return x.slice(0, -dropNumber);
}

function either(x, y) {
  if (y === undefined) {
    return yHolder => either(x, yHolder);
  }

  return input => x(input) || y(input);
}

function endsWith(x, y) {
  if (y === undefined) {
    return yHolder => endsWith(x, yHolder);
  }

  return y.endsWith(x);
}

var inc = (x => x + 1);

function F() {
  return false;
}

function find(fn, arr) {
  if (arr === undefined) {
    return arrHolder => find(fn, arrHolder);
  }

  return arr.find(fn);
}

function findIndex(fn, arr) {
  if (arr === undefined) {
    return arrHolder => findIndex(fn, arrHolder);
  }
  const len = arr.length;
  let index = -1;

  while (++index < len) {
    if (fn(arr[index])) {
      return index;
    }
  }

  return -1;
}

function flatten(arr, willReturn) {
  willReturn = willReturn === undefined ? [] : willReturn;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], willReturn);
    } else {
      willReturn.push(arr[i]);
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

function flip(fn, ...input) {
  return flipExport(fn);
}

function tap(fn, x) {
  if (x === undefined) {
    return xHolder => tap(fn, xHolder);
  }

  fn(x);

  return x;
}

function mapObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    willReturn[prop] = fn(obj[prop], prop);
  }

  return willReturn;
}

function map(fn, arr) {
  if (arr === undefined) {
    return arrHolder => map(fn, arrHolder);
  }
  if (arr.length === undefined) {
    return mapObject(fn, arr);
  }
  let index = -1;
  const len = arr.length;
  const willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(arr[index]);
  }

  return willReturn;
}

function forEach(fn, arr) {
  if (arr === undefined) {
    return arrHolder => forEach(fn, arrHolder);
  }

  return map(tap(fn), arr);
}

function has(prop, obj) {
  if (obj === undefined) {
    return objHolder => has(prop, objHolder);
  }

  return obj[prop] !== undefined;
}

function head(a) {
  if (typeof a === 'string') {
    return a[0] || '';
  }

  return a[0];
}

function identity(x) {
  return x;
}

function ifElse(condition, ifFn, elseFn) {
  if (ifFn === undefined) {
    return (ifFnHolder, elseFnHolder) => ifElse(condition, ifFnHolder, elseFnHolder);
  } else if (elseFn === undefined) {
    return elseFnHolder => ifElse(condition, ifFn, elseFnHolder);
  }

  return input => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(input);

    if (conditionResult === true) {
      return ifFn(input);
    }

    return elseFn(input);
  };
}

function is(xPrototype, x) {
  if (x === undefined) {
    return xHolder => is(xPrototype, xHolder);
  }

  return x instanceof xPrototype || x.constructor === xPrototype;
}

function isNil(x) {
  return x === undefined || x === null;
}

function includes(x, y) {
  if (y === undefined) {
    return yHolder => includes(x, yHolder);
  }

  return y.includes(x);
}

function indexOf(x, arr) {
  if (arr === undefined) {
    return arrHolder => indexOf(x, arrHolder);
  }
  let index = -1;
  const length = arr.length;

  while (++index < length) {
    if (arr[index] === x) {
      return index;
    }
  }

  return -1;
}

function baseSlice(array, start, end) {
  let index = -1;
  let length = array.length;

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

function init(a) {
  if (typeof a === 'string') {
    return a.slice(0, -1);
  }

  return a.length ? baseSlice(a, 0, -1) : [];
}

function join(glue, arr) {
  if (arr === undefined) {
    return arrHolder => join(glue, arrHolder);
  }

  return arr.join(glue);
}

function lastIndexOf(x, arr) {
  if (arr === undefined) {
    return arrHolder => lastIndexOf(x, arrHolder);
  }
  let willReturn = -1;

  arr.map((value, key) => {
    if (equals(value, x)) {
      willReturn = key;
    }
  });

  return willReturn;
}

function last(a) {
  if (typeof a === 'string') {
    return a[a.length - 1] || '';
  }

  return a[a.length - 1];
}

function length(x) {
  return x.length;
}

function match(regex, x) {
  if (x === undefined) {
    return xHolder => match(regex, xHolder);
  }
  const willReturn = x.match(regex);

  return willReturn === null ? [] : willReturn;
}

function merge(obj, newProps) {
  if (newProps === undefined) {
    return newPropsHolder => merge(obj, newPropsHolder);
  }

  return Object.assign({}, obj, newProps);
}

function modulo(x, y) {
  if (y === undefined) {
    return yHolder => modulo(x, yHolder);
  }

  return x % y;
}

function multiply(x, y) {
  if (y === undefined) {
    return yHolder => multiply(x, yHolder);
  }

  return x * y;
}

function none(fn, arr) {
  if (arr === undefined) {
    return arrHolder => none(fn, arrHolder);
  }

  return arr.filter(fn).length === 0;
}

function not(x) {
  return !x;
}

function partialCurry(fn, inputArguments = {}) {
  return inputArgumentsHolder => {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((resolve, reject) => {
        fn(merge(inputArgumentsHolder, inputArguments)).then(resolve).catch(reject);
      });
    }

    return fn(merge(inputArgumentsHolder, inputArguments));
  };
}

function path(pathArr, obj) {
  if (arguments.length === 1) {
    return objHolder => path(pathArr, objHolder);
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  let willReturn = obj;
  let counter = 0;

  const pathArrValue = typeof pathArr === 'string' ? pathArr = pathArr.split('.') : pathArr;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }
    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
}

function pathOr(defaultValue, inputPath, inputObject) {
  return defaultTo(defaultValue, path(inputPath, inputObject));
}

var pathOr$1 = curry(pathOr);

function pick(keys, obj) {
  if (arguments.length === 1) {
    return objHolder => pick(keys, objHolder);
  }
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
  if (arguments.length === 1) {
    return objHolder => pickAll(keys, objHolder);
  }
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

function pluck(keyToPluck, arr) {
  if (arr === undefined) {
    return arrHolder => pluck(keyToPluck, arrHolder);
  }
  const willReturn = [];

  map(val => {
    if (!(val[keyToPluck] === undefined)) {
      willReturn.push(val[keyToPluck]);
    }
  }, arr);

  return willReturn;
}

function prepend(x, arr) {
  if (arr === undefined) {
    return arrHolder => prepend(x, arrHolder);
  }
  if (typeof arr === 'string') {
    return `${x}${arr}`;
  }
  const clone = arr.concat();

  clone.unshift(x);

  return clone;
}

function prop(key, obj) {
  if (obj === undefined) {
    return objHolder => prop(key, objHolder);
  }

  return obj[key];
}

function propEq(key, x, obj) {
  if (x === undefined) {
    return (xHolder, objHolder) => propEq(key, xHolder, objHolder);
  } else if (obj === undefined) {
    return objHolder => propEq(key, x, objHolder);
  }

  return obj[key] === x;
}

function range(start, end) {
  if (end === undefined) {
    return endHolder => range(start, endHolder);
  }
  const willReturn = [];

  for (let i = start; i < end; i++) {
    willReturn.push(i);
  }

  return willReturn;
}

function reduce(fn, initialValue, arr) {
  if (initialValue === undefined) {
    return (initialValueHolder, arrHolder) => reduce(fn, initialValueHolder, arrHolder);
  } else if (arr === undefined) {
    return arrHolder => reduce(fn, initialValue, arrHolder);
  }

  return arr.reduce(fn, initialValue);
}

function reject(fn, arr) {
  if (arr === undefined) {
    return arrHolder => reject(fn, arrHolder);
  }

  return filter(x => !fn(x), arr);
}

function repeat(x, num) {
  if (num === undefined) {
    return numHolder => repeat(x, numHolder);
  }
  const willReturn = Array(num);

  return willReturn.fill(x);
}

function replace(regex, replacer, str) {
  if (replacer === undefined) {
    return (replacerHolder, strHolder) => replace(regex, replacerHolder, strHolder);
  } else if (str === undefined) {
    return strHolder => replace(regex, replacer, strHolder);
  }

  return str.replace(regex, replacer);
}

function reverse(arr) {
  const clone = arr.concat();

  return clone.reverse();
}

function sort(fn, arr) {
  if (arr === undefined) {
    return arrHolder => sort(fn, arrHolder);
  }
  const arrClone = arr.concat();

  return arrClone.sort(fn);
}

function sortBy(fn, arr) {
  if (arr === undefined) {
    return arrHolder => sortBy(fn, arrHolder);
  }
  const arrClone = arr.concat();

  return arrClone.sort((a, b) => {
    const fnA = fn(a);
    const fnB = fn(b);

    return fnA < fnB ? -1 : fnA > fnB ? 1 : 0;
  });
}

function split(glue, str) {
  if (str === undefined) {
    return strHolder => split(glue, strHolder);
  }

  return str.split(glue);
}

function splitEvery(num, x) {
  if (x === undefined) {
    return xHolder => splitEvery(num, xHolder);
  }

  const numValue = num > 1 ? num : 1;

  const willReturn = [];
  let counter = 0;

  while (counter < x.length) {
    willReturn.push(x.slice(counter, counter += numValue));
  }

  return willReturn;
}

function startsWith(x, y) {
  if (y === undefined) {
    return yHolder => startsWith(x, yHolder);
  }

  return y.startsWith(x);
}

function subtract(x, y) {
  if (y === undefined) {
    return yHolder => subtract(x, yHolder);
  }

  return x - y;
}

function T() {
  return true;
}

function tail(arr) {
  return drop(1, arr);
}

function take(num, x) {
  if (x === undefined) {
    return xHolder => take(num, xHolder);
  }
  if (typeof x === 'string') {
    return x.slice(0, num);
  }

  return baseSlice(x, 0, num);
}

function takeLast(num, x) {
  if (x === undefined) {
    return xHolder => takeLast(num, xHolder);
  }
  const len = x.length;

  let numValue = num > len ? len : num;

  if (typeof x === 'string') {
    return x.slice(len - numValue);
  }
  numValue = len - numValue;

  return baseSlice(x, numValue, len);
}

function test(regex, str) {
  if (str === undefined) {
    return strHolder => test(regex, strHolder);
  }

  return str.search(regex) !== -1;
}

function times(fn, num) {
  if (num === undefined) {
    return numHolder => times(fn, numHolder);
  }

  return map(fn, range(0, num));
}

function toLower(x) {
  return x.toLowerCase();
}

function toUpper(x) {
  return x.toUpperCase();
}

function toString(x) {
  return x.toString();
}

function trim(str) {
  return str.trim();
}

function uniq(arr) {
  let index = -1;
  const willReturn = [];

  while (++index < arr.length) {
    const value = arr[index];

    if (!contains(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function uniqWith(fn, arr) {
  if (arguments.length === 1) {
    return arrHolder => uniqWith(fn, arrHolder);
  }

  let index = -1;
  const willReturn = [];

  while (++index < arr.length) {
    const value = arr[index];
    const flag = any(willReturnInstance => fn(value, willReturnInstance), willReturn);

    if (!flag) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function update(index, newValue, arr) {
  if (newValue === undefined) {
    return (newValueHolder, arrHolder) => update(index, newValueHolder, arrHolder);
  } else if (arr === undefined) {
    return arrHolder => update(index, newValue, arrHolder);
  }
  const arrClone = arr.concat();

  return arrClone.fill(newValue, index, index + 1);
}

function values(obj) {
  const willReturn = [];

  for (const key in obj) {
    willReturn.push(obj[key]);
  }

  return willReturn;
}

function without(itemsToOmit, collection) {
  return reduce((accum, item) => !contains(item, itemsToOmit) ? accum.concat(item) : accum, [], collection);
}

exports.add = add;
exports.addIndex = addIndex;
exports.adjust = adjust;
exports.all = all;
exports.allPass = allPass;
exports.anyPass = anyPass;
exports.always = always;
exports.any = any;
exports.append = append;
exports.both = both;
exports.complement = complement;
exports.compose = compose;
exports.concat = concat;
exports.contains = contains;
exports.curry = curry;
exports.dec = dec;
exports.defaultTo = defaultTo;
exports.dissoc = dissoc;
exports.divide = divide;
exports.drop = drop;
exports.dropLast = dropLast;
exports.either = either;
exports.endsWith = endsWith;
exports.inc = inc;
exports.equals = equals;
exports.F = F;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.flatten = flatten;
exports.flip = flip;
exports.forEach = forEach;
exports.has = has;
exports.head = head;
exports.identity = identity;
exports.ifElse = ifElse;
exports.is = is;
exports.isNil = isNil;
exports.includes = includes;
exports.indexOf = indexOf;
exports.init = init;
exports.join = join;
exports.lastIndexOf = lastIndexOf;
exports.last = last;
exports.length = length;
exports.map = map;
exports.match = match;
exports.merge = merge;
exports.modulo = modulo;
exports.multiply = multiply;
exports.none = none;
exports.not = not;
exports.omit = omit;
exports.partialCurry = partialCurry;
exports.path = path;
exports.pathOr = pathOr$1;
exports.pick = pick;
exports.pickAll = pickAll;
exports.pipe = pipe;
exports.pluck = pluck;
exports.prepend = prepend;
exports.prop = prop;
exports.propEq = propEq;
exports.range = range;
exports.reduce = reduce;
exports.reject = reject;
exports.repeat = repeat;
exports.replace = replace;
exports.reverse = reverse;
exports.sort = sort;
exports.sortBy = sortBy;
exports.split = split;
exports.splitEvery = splitEvery;
exports.startsWith = startsWith;
exports.subtract = subtract;
exports.T = T;
exports.tap = tap;
exports.tail = tail;
exports.take = take;
exports.takeLast = takeLast;
exports.test = test;
exports.times = times;
exports.toLower = toLower;
exports.toUpper = toUpper;
exports.toString = toString;
exports.trim = trim;
exports.type = type;
exports.uniq = uniq;
exports.uniqWith = uniqWith;
exports.update = update;
exports.values = values;
exports.without = without;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rambda.umd.js.map
