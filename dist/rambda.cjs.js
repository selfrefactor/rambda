'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function curry(fn) {
  return function (x, y) {
    if (y === undefined) {
      return function (yHolder) {
        return fn(x, yHolder);
      };
    }

    return fn(x, y);
  };
}

function add(x, y) {
  return x + y;
}

var add$1 = curry(add);

function addIndex(functor) {
  return function (fn) {
    var cnt = 0;
    var newFn = function newFn() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return fn.apply(null, [].concat(args, [cnt++]));
    };

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return functor.apply(null, [newFn].concat(rest));
  };
}

function curryThree(fn) {
  return function (x, y, z) {
    if (y === undefined) {
      var helper = function helper(yHolder, zHolder) {
        return fn(x, yHolder, zHolder);
      };

      return curry(helper);
    } else if (z === undefined) {
      return function (zHolder) {
        return fn(x, y, zHolder);
      };
    }

    return fn(x, y, z);
  };
}

function adjust(fn, index, arr) {
  var clone = arr.concat();

  return clone.map(function (val, key) {
    if (key === index) {
      return fn(arr[index]);
    }

    return val;
  });
}

var adjust$1 = curryThree(adjust);

function filterObject(fn, obj) {
  var willReturn = {};
  for (var prop in obj) {
    if (fn(obj[prop])) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(fn, arr) {
  if (arr.length === undefined) {
    return filterObject(fn, arr);
  }
  var index = -1;
  var resIndex = 0;
  var len = arr.length;
  var willReturn = [];

  while (++index < len) {
    var value = arr[index];
    if (fn(value)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

var filter$1 = curry(filter);

function all(condition, arr) {
  return filter$1(condition, arr).length === arr.length;
}

var all$1 = curry(all);

function any(fn, arr) {
  var counter = 0;
  while (counter < arr.length) {
    if (fn(arr[counter])) {
      return true;
    }
    counter++;
  }

  return false;
}

var any$1 = curry(any);

function allPass(conditions, x) {
  if (arguments.length === 1) {
    return function (xHolder) {
      return allPass(conditions, xHolder);
    };
  }

  return !any$1(function (condition) {
    return !condition(x);
  }, conditions);
}

function anyPass(conditions, x) {
  if (arguments.length === 1) {
    return function (xHolder) {
      return anyPass(conditions, xHolder);
    };
  }

  return any$1(function (condition) {
    return condition(x);
  })(conditions);
}

function append(val, arr) {
  if (typeof arr === 'string') {
    return '' + arr + val;
  }
  var clone = arr.concat();
  clone.push(val);

  return clone;
}

var append$1 = curry(append);

function both(x, y) {
  return function (input) {
    return x(input) && y(input);
  };
}

var both$1 = curry(both);

//Taken from https://github.com/getify/Functional-Light-JS/blob/master/ch4.md
function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (result) {
    var list = fns.slice();

    while (list.length > 0) {
      result = list.pop()(result);
    }

    return result;
  };
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

















































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function concat(x, y) {

  return typeof x === 'string' ? '' + x + y : [].concat(toConsumableArray(x), toConsumableArray(y));
}

var concat$1 = curry(concat);

function type(a) {
  var typeOf = typeof a === 'undefined' ? 'undefined' : _typeof(a);
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

  var asStr = a.toString();

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
    return function (bHolder) {
      return equals(a, bHolder);
    };
  }

  if (a === b) {
    return true;
  }
  var aType = type(a);
  if (aType !== type(b)) {
    return false;
  }

  if (aType === 'Array') {
    var aClone = Array.from(a);
    var bClone = Array.from(b);

    return aClone.sort().toString() === bClone.sort().toString();
  }

  if (aType === 'Object') {
    var aKeys = Object.keys(a);
    if (aKeys.length === Object.keys(b).length) {
      if (aKeys.length === 0) {
        return true;
      }
      var flag = true;
      aKeys.map(function (val) {
        if (flag) {
          var aValType = type(a[val]);
          var bValType = type(b[val]);
          if (aValType === bValType) {
            if (aValType === 'Object') {
              if (Object.keys(a[val]).length === Object.keys(b[val]).length) {
                if (Object.keys(a[val]).length !== 0) {
                  if (!equals(a[val], b[val])) {
                    flag = false;
                  }
                }
              } else {
                flag = false;
              }
            } else if (!equals(a[val], b[val])) {
              flag = false;
            }
          } else {
            flag = false;
          }
        }
      });

      return flag;
    }
  }

  return false;
}

function contains(val, arr) {
  var index = -1;
  var flag = false;
  while (++index < arr.length && !flag) {
    if (equals(arr[index], val)) {
      flag = true;
    }
  }

  return flag;
}

var contains$1 = curry(contains);

//taken from the last comment of https://gist.github.com/mkuklis/5294248

function curry$1(f) {
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return function () {
    for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
      p[_key] = arguments[_key];
    }

    return function (o) {
      return o.length >= f.length ? f.apply(undefined, toConsumableArray(o)) : curry$1(f, o);
    }([].concat(toConsumableArray(a), p));
  };
}

var dec = (function (x) {
  return x - 1;
});

function defaultTo(defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return function (inputArgumentHolder) {
      return defaultTo(defaultArgument, inputArgumentHolder);
    };
  }

  return inputArgument === undefined || inputArgument === null || Number.isNaN(inputArgument) === true ? defaultArgument : inputArgument;
}

function divide(x, y) {
  return x / y;
}

var divide$1 = curry(divide);

function drop(dropNumber, a) {
  return a.slice(dropNumber);
}

var drop$1 = curry(drop);

function dropLast(dropNumber, a) {
  return a.slice(0, -dropNumber);
}

var dropLast$1 = curry(dropLast);

function either(x, y) {
  return function (input) {
    return x(input) || y(input);
  };
}

var either$1 = curry(either);

function endsWith(x, y) {
  return y.endsWith(x);
}

var endsWith$1 = curry(endsWith);

var inc = (function (x) {
  return x + 1;
});

function find(fn, arr) {
  return arr.find(fn);
}

var find$1 = curry(find);

function findIndex(fn, arr) {
  var length = arr.length;
  var index = -1;

  while (++index < length) {
    if (fn(arr[index])) {
      return index;
    }
  }

  return -1;
}

var findIndex$1 = curry(findIndex);

function flatten(arr, willReturn) {
  willReturn = willReturn === undefined ? [] : willReturn;

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], willReturn);
    } else {
      willReturn.push(arr[i]);
    }
  }

  return willReturn;
}

function flipExport(fn) {
  return function () {
    for (var _len = arguments.length, input = Array(_len), _key = 0; _key < _len; _key++) {
      input[_key] = arguments[_key];
    }

    if (input.length === 1) {
      return function (holder) {
        return fn(holder, input[0]);
      };
    } else if (input.length === 2) {
      return fn(input[1], input[0]);
    }

    return undefined;
  };
}

function flip(fn) {
  return flipExport(fn);
}

function tap(fn, input) {
  fn(input);

  return input;
}

var tap$1 = curry(tap);

function mapObject(fn, obj) {
  var willReturn = {};
  for (var prop in obj) {
    willReturn[prop] = fn(obj[prop]);
  }

  return willReturn;
}

function map(fn, arr) {
  if (arr.length === undefined) {
    return mapObject(fn, arr);
  }
  var index = -1;
  var length = arr.length;
  var willReturn = Array(length);

  while (++index < length) {
    willReturn[index] = fn(arr[index]);
  }

  return willReturn;
}

var map$1 = curry(map);

function forEach(fn, arr) {
  return map$1(tap$1(fn), arr);
}

var forEach$1 = curry(forEach);

function has(prop, obj) {
  return obj[prop] !== undefined;
}

var has$1 = curry(has);

function head(a) {
  if (typeof a === 'string') {
    return a[0] || '';
  }

  return a[0];
}

function ifElse(conditionFn, ifFn, elseFn) {
  return function (input) {
    if (conditionFn(input) === true) {
      return ifFn(input);
    }

    return elseFn(input);
  };
}

var ifElse$1 = curryThree(ifElse);

function isNil(x) {
  return x === undefined || x === null;
}

function includes(x, y) {
  return y.includes(x);
}

var includes$1 = curry(includes);

function indexOf(x, arr) {
  var index = -1;
  var length = arr.length;

  while (++index < length) {
    if (arr[index] === x) {
      return index;
    }
  }

  return -1;
}

var indexOf$1 = curry(indexOf);

function baseSlice(array, start, end) {
  var index = -1;
  var length = array.length;

  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;

  var result = Array(length);
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
  return arr.join(glue);
}

var join$1 = curry(join);

function lastIndexOf(x, arr) {
  var willReturn = -1;
  arr.map(function (value, key) {
    if (equals(value, x)) {
      willReturn = key;
    }
  });

  return willReturn;
}

var lastIndexOf$1 = curry(lastIndexOf);

function last(a) {
  if (typeof a === 'string') {
    return a[a.length - 1] || '';
  }

  return a[a.length - 1];
}

function length(x) {

  return x.length;
}

function match(regex, str) {
  var willReturn = str.match(regex);

  return willReturn === null ? [] : willReturn;
}

var match$1 = curry(match);

function merge(obj, newProps) {
  return Object.assign({}, obj, newProps);
}

var merge$1 = curry(merge);

function modulo(x, y) {
  return x % y;
}

var modulo$1 = curry(modulo);

function multiply(x, y) {
  return x * y;
}

var multiply$1 = curry(multiply);

function omit(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return omit(keys, objHolder);
    };
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  if (typeof keys === 'string') {
    keys = keys.split(',');
  }

  var willReturn = {};
  for (var key in obj) {
    if (!keys.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

function partialCurry(fn) {
  var inputArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (inputArgumentsHolder) {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise(function (resolve, reject) {
        fn(merge$1(inputArgumentsHolder, inputArguments)).then(resolve).catch(reject);
      });
    }

    return fn(merge$1(inputArgumentsHolder, inputArguments));
  };
}

function path(pathArr, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return path(pathArr, objHolder);
    };
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  var holder = obj;
  var counter = 0;
  if (typeof pathArr === 'string') {
    pathArr = pathArr.split('.');
  }
  while (counter < pathArr.length) {
    if (holder === null || holder === undefined) {
      return undefined;
    }
    holder = holder[pathArr[counter]];
    counter++;
  }

  return holder;
}

function pathOr(defaultValue, inputPath, inputObject) {
  return defaultTo(defaultValue, path(inputPath, inputObject));
}

var pathOr$1 = curry$1(pathOr);

function pick(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return pick(keys, objHolder);
    };
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  if (typeof keys === 'string') {
    keys = keys.split(',');
  }

  var willReturn = {};
  var counter = 0;
  while (counter < keys.length) {
    if (keys[counter] in obj) {
      willReturn[keys[counter]] = obj[keys[counter]];
    }
    counter++;
  }

  return willReturn;
}

function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return compose.apply(undefined, toConsumableArray(fns.reverse()));
}

function pluck(keyToPluck, arr) {
  var willReturn = [];
  map$1(function (val) {
    if (!(val[keyToPluck] === undefined)) {
      willReturn.push(val[keyToPluck]);
    }
  }, arr);

  return willReturn;
}

var pluck$1 = curry(pluck);

function prepend(val, arr) {
  if (typeof arr === 'string') {
    return '' + val + arr;
  }
  var clone = arr.concat();
  clone.unshift(val);

  return clone;
}

var prepend$1 = curry(prepend);

function prop(key, obj) {
  return obj[key];
}

var prop$1 = curry(prop);

function propEq(key, val, obj) {
  return obj[key] === val;
}

var propEq$1 = curryThree(propEq);

function range(start, end) {
  var willReturn = [];
  for (var i = start; i < end; i++) {
    willReturn.push(i);
  }

  return willReturn;
}

function reduce(fn, initialValue, arr) {
  return arr.reduce(fn, initialValue);
}

var reduce$1 = curryThree(reduce);

function reject(predicate, collection) {
  return filter$1(function (x) {
    return !predicate(x);
  }, collection);
}

var reject$1 = curry(reject);

function repeat(a, num) {
  var willReturn = Array(num);

  return willReturn.fill(a);
}

var repeat$1 = curry(repeat);

function replace(regex, replacer, str) {
  return str.replace(regex, replacer);
}

var replace$1 = curryThree(replace);

function reverse(arr) {
  var clone = arr.concat();

  return clone.reverse();
}

function sort(fn, arr) {
  var arrClone = arr.concat();

  return arrClone.sort(fn);
}

var sort$1 = curry(sort);

function sortBy(fn, arr) {
  var arrClone = arr.concat();

  return arrClone.sort(function (a, b) {
    var fnA = fn(a);
    var fnB = fn(b);

    return fnA < fnB ? -1 : fnA > fnB ? 1 : 0;
  });
}

var sortBy$1 = curry(sortBy);

function split(glue, str) {
  return str.split(glue);
}

var split$1 = curry(split);

function splitEvery(num, a) {
  num = num > 1 ? num : 1;

  var willReturn = [];
  var counter = 0;
  while (counter < a.length) {
    willReturn.push(a.slice(counter, counter += num));
  }

  return willReturn;
}

var splitEvery$1 = curry(splitEvery);

function startsWith(x, y) {
  return y.startsWith(x);
}

var startsWith$1 = curry(startsWith);

function subtract(x, y) {
  return x - y;
}

var subtract$1 = curry(subtract);

function tail(arr) {
  return drop$1(1, arr);
}

function take(takeNumber, a) {
  if (typeof a === 'string') {
    return a.slice(0, takeNumber);
  }

  return baseSlice(a, 0, takeNumber);
}

var take$1 = curry(take);

function takeLast(takeNumber, a) {
  var len = a.length;
  takeNumber = takeNumber > len ? len : takeNumber;

  if (typeof a === 'string') {
    return a.slice(len - takeNumber);
  }
  takeNumber = len - takeNumber;

  return baseSlice(a, takeNumber, len);
}

var takeLast$1 = curry(takeLast);

function test(regex, str) {
  return str.search(regex) !== -1;
}

var test$1 = curry(test);

function times(fn, n) {
  return map$1(fn, range(0, n));
}

var times$1 = curry(times);

function toLower(x) {
  return x.toLowerCase();
}

function toUpper(x) {
  return x.toUpperCase();
}

function toString(x) {
  return x.toString();
}

function typedDefaultTo(defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return function (inputArgumentHolder) {
      return typedDefaultTo(defaultArgument, inputArgumentHolder);
    };
  }

  return type(inputArgument) !== type(defaultArgument) ? defaultArgument : inputArgument;
}

function typedPathOr(defaultValue, inputPath, inputObject) {
  return typedDefaultTo(defaultValue, path(inputPath, inputObject));
}

var typedPathOr$1 = curry$1(typedPathOr);

function uniq(arr) {
  var index = -1;
  var willReturn = [];
  while (++index < arr.length) {
    var value = arr[index];
    if (!contains$1(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function update(index, newValue, arr) {
  var arrClone = arr.concat();

  return arrClone.fill(newValue, index, index + 1);
}

var update$1 = curryThree(update);

function values(obj) {
  var willReturn = [];
  for (var key in obj) {
    willReturn.push(obj[key]);
  }

  return willReturn;
}

function without(itemsToOmit, collection) {
  return reduce$1(function (accum, item) {
    return !contains$1(item, itemsToOmit) ? accum.concat(item) : accum;
  }, [], collection);
}

var always = function always(x) {
  return function () {
    return x;
  };
};
var complement = function complement(fn) {
  return function (input) {
    return !fn(input);
  };
};
var F = function F() {
  return false;
};
var identity = function identity(x) {
  return x;
};
var not = function not(x) {
  return !x;
};
var T = function T() {
  return true;
};
var trim = function trim(x) {
  return x.trim();
};

exports.always = always;
exports.complement = complement;
exports.F = F;
exports.identity = identity;
exports.not = not;
exports.T = T;
exports.trim = trim;
exports.add = add$1;
exports.addIndex = addIndex;
exports.adjust = adjust$1;
exports.all = all$1;
exports.allPass = allPass;
exports.anyPass = anyPass;
exports.any = any$1;
exports.append = append$1;
exports.both = both$1;
exports.compose = compose;
exports.concat = concat$1;
exports.contains = contains$1;
exports.curry = curry$1;
exports.dec = dec;
exports.defaultTo = defaultTo;
exports.divide = divide$1;
exports.drop = drop$1;
exports.dropLast = dropLast$1;
exports.either = either$1;
exports.endsWith = endsWith$1;
exports.inc = inc;
exports.equals = equals;
exports.filter = filter$1;
exports.find = find$1;
exports.findIndex = findIndex$1;
exports.flatten = flatten;
exports.flip = flip;
exports.forEach = forEach$1;
exports.has = has$1;
exports.head = head;
exports.ifElse = ifElse$1;
exports.isNil = isNil;
exports.includes = includes$1;
exports.indexOf = indexOf$1;
exports.init = init;
exports.join = join$1;
exports.lastIndexOf = lastIndexOf$1;
exports.last = last;
exports.length = length;
exports.map = map$1;
exports.match = match$1;
exports.merge = merge$1;
exports.modulo = modulo$1;
exports.multiply = multiply$1;
exports.omit = omit;
exports.partialCurry = partialCurry;
exports.path = path;
exports.pathOr = pathOr$1;
exports.pick = pick;
exports.pipe = pipe;
exports.pluck = pluck$1;
exports.prepend = prepend$1;
exports.prop = prop$1;
exports.propEq = propEq$1;
exports.range = range;
exports.reduce = reduce$1;
exports.reject = reject$1;
exports.repeat = repeat$1;
exports.replace = replace$1;
exports.reverse = reverse;
exports.sort = sort$1;
exports.sortBy = sortBy$1;
exports.split = split$1;
exports.splitEvery = splitEvery$1;
exports.startsWith = startsWith$1;
exports.subtract = subtract$1;
exports.tap = tap$1;
exports.tail = tail;
exports.take = take$1;
exports.takeLast = takeLast$1;
exports.test = test$1;
exports.times = times$1;
exports.toLower = toLower;
exports.toUpper = toUpper;
exports.toString = toString;
exports.type = type;
exports.typedPathOr = typedPathOr$1;
exports.typedDefaultTo = typedDefaultTo;
exports.uniq = uniq;
exports.update = update$1;
exports.values = values;
exports.without = without;
//# sourceMappingURL=rambda.cjs.js.map
