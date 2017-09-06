function helper(method, x, y) {
  if (x === undefined) {
    return function (xHolder, yHolder) {
      return helper(method, xHolder, yHolder);
    };
  } else if (y === undefined) {
    return function (yHolder) {
      return helper(method, x, yHolder);
    };
  }
  if (y[method] !== undefined) {
    return y[method](x);
  }
}

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

function mathHelper(operation, x, y) {
  switch (operation) {

    case '+':
      return x + y;
    case '-':
      return x - y;
    case '/':
      return x / y;
    case '*':
      return x * y;
    case '%':
      return x % y;

  }
}

var mathHelper$1 = curryThree(mathHelper);

function oppositeHelper(method, x, y) {
  if (x === undefined) {
    return function (xHolder, yHolder) {
      return oppositeHelper(method, xHolder, yHolder);
    };
  } else if (y === undefined) {
    return function (yHolder) {
      return oppositeHelper(method, x, yHolder);
    };
  }
  if (x[method] !== undefined) {
    return x[method](y);
  }
}

function propHelper(method, x) {
  if (x === undefined) {
    return function (xHolder) {
      return propHelper(method, xHolder);
    };
  }

  return x[method];
}

function simpleHelper(method, x) {
  if (x === undefined) {
    return function (xHolder) {
      return simpleHelper(method, xHolder);
    };
  }
  if (x[method] !== undefined) {
    return x[method]();
  }
}

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
  if (arguments.length === 1) {
    return function (arrHolder) {
      return all(condition, arrHolder);
    };
  }

  return filter$1(condition, arr).length === arr.length;
}

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
  })(conditions);
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

var babelHelpers = {};
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

babelHelpers;

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

var equals$1 = curry(equals);

function contains(val, arr) {
  var index = -1;
  var flag = false;
  while (++index < arr.length && !flag) {
    if (equals$1(arr[index], val)) {
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

  return inputArgument === undefined || !(type(inputArgument) === type(defaultArgument)) ? defaultArgument : inputArgument;
}

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
  return type(x) === 'Undefined' || type(x) === 'Null';
}

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

function last(a) {
  if (typeof a === 'string') {
    return a[a.length - 1] || '';
  }

  return a[a.length - 1];
}

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

function match(regex, str) {
  var willReturn = str.match(regex);

  return willReturn === null ? [] : willReturn;
}

var match$1 = curry(match);

function merge(obj, newProps) {
  return Object.assign({}, obj, newProps);
}

var merge$1 = curry(merge);

function omit(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return omit(keys, objHolder);
    };
  }
  if (obj === undefined || obj === null) {
    return undefined;
  }
  if (typeof keys === 'string') {
    keys = keys.split(',').map(function (x) {
      return x.trim();
    });
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

function pick(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return pick(keys, objHolder);
    };
  }
  if (!(type(obj) === 'Object')) {
    return undefined;
  }
  if (type(keys) === 'String') {
    keys = keys.split(',').map(function (x) {
      return x.trim();
    });
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

function repeat(a, num) {
  var willReturn = Array(num);

  return willReturn.fill(a);
}

var repeat$1 = curry(repeat);

function replace(regex, replacer, str) {
  return str.replace(regex, replacer);
}

var replace$1 = curryThree(replace);

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

function tap(fn, input) {
  fn(input);

  return input;
}

var tap$1 = curry(tap);

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

var add = mathHelper$1('+');
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
var concat = oppositeHelper('concat');
var divide = mathHelper$1('/');
var endsWith = helper('endsWith');
var F = function F() {
  return false;
};
var identity = function identity(x) {
  return x;
};
var includes = helper('includes');
var join = helper('join');
var lastIndexOf = helper('lastIndexOf');
var length = propHelper('length');
var modulo = mathHelper$1('%');
var multiply = mathHelper$1('*');
var not = function not(x) {
  return !x;
};
var padEnd = helper('padEnd');
var padStart = helper('padStart');
var reverse = simpleHelper('reverse');
var startsWith = helper('startsWith');
var subtract = mathHelper$1('-');
var T = function T() {
  return true;
};
var toLower = simpleHelper('toLowerCase');
var toString = simpleHelper('toString');
var toUpper = simpleHelper('toUpperCase');
var trim = simpleHelper('trim');

export { add, always, complement, concat, divide, endsWith, F, identity, includes, join, lastIndexOf, length, modulo, multiply, not, padEnd, padStart, reverse, startsWith, subtract, T, toLower, toString, toUpper, trim, addIndex, adjust$1 as adjust, all, allPass, anyPass, any$1 as any, append$1 as append, both$1 as both, compose, contains$1 as contains, curry$1 as curry, dec, defaultTo, drop$1 as drop, dropLast$1 as dropLast, either$1 as either, inc, equals$1 as equals, filter$1 as filter, find$1 as find, findIndex$1 as findIndex, flatten, flip, has$1 as has, head, ifElse$1 as ifElse, isNil, indexOf$1 as indexOf, init, last, map$1 as map, match$1 as match, merge$1 as merge, omit, partialCurry, path, pick, pluck$1 as pluck, prepend$1 as prepend, prop$1 as prop, propEq$1 as propEq, range, reduce$1 as reduce, repeat$1 as repeat, replace$1 as replace, sort$1 as sort, sortBy$1 as sortBy, split$1 as split, splitEvery$1 as splitEvery, tap$1 as tap, tail, take$1 as take, takeLast$1 as takeLast, test$1 as test, type, uniq, update$1 as update, values };
//# sourceMappingURL=rambda.esm.js.map
