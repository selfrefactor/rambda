module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = curry;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function type(a) {
  if (a === null) {

    return "Null";
  } else if (Array.isArray(a)) {

    return "Array";
  } else if (typeof a === "boolean") {

    return "Boolean";
  } else if (typeof a === "number") {

    return "Number";
  } else if (typeof a === "string") {

    return "String";
  } else if (a === undefined) {

    return "Undefined";
  } else if (a instanceof RegExp) {

    return "RegExp";
  }

  var asStr = a.toString();

  if (asStr.startsWith("async")) {
    return "Async";
  } else if (asStr === "[object Promise]") {
    return "Promise";
  } else if (asStr.includes("function") || asStr.includes("=>")) {
    return "Function";
  }

  return "Object";
}

module.exports = type;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

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

module.exports = curryThree;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = baseSlice;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

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

module.exports = curry(any);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var equals = __webpack_require__(7);
var curry = __webpack_require__(0);

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

module.exports = curry(contains);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function drop(dropNumber, a) {
  return a.slice(dropNumber);
}

module.exports = curry(drop);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);
var type = __webpack_require__(1);

function equals(a, b) {
  if (a === b) {

    return true;
  }
  var aType = type(a);
  if (aType !== type(b)) {
    return false;
  }

  if (aType === "Array") {
    var aClone = Array.from(a);
    var bClone = Array.from(b);

    return aClone.sort().toString() === bClone.sort().toString();
  }

  if (aType === "Object") {
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
            if (aValType === "Object") {
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

module.exports = curry(equals);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function filter(fn, arr) {
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

module.exports = curry(filter);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function map(fn, arr) {
  var index = -1;
  var length = arr.length;
  var willReturn = Array(length);

  while (++index < length) {
    willReturn[index] = fn(arr[index]);
  }

  return willReturn;
}

module.exports = curry(map);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function merge(obj, newProps) {
  return Object.assign({}, obj, newProps);
}

module.exports = curry(merge);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = addIndex;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curryThree = __webpack_require__(2);

function adjust(fn, index, arr) {
  var clone = arr.concat();

  return clone.map(function (val, key) {
    if (key === index) {
      return fn(arr[index]);
    }

    return val;
  });
}

module.exports = curryThree(adjust);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var filter = __webpack_require__(8);

function all(condition, arr) {
  if (arguments.length === 1) {
    return function (arrHolder) {
      return all(condition, arrHolder);
    };
  }

  return filter(condition, arr).length === arr.length;
}

module.exports = all;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var any = __webpack_require__(4);

function allPass(conditions, x) {
  if (arguments.length === 1) {
    return function (conditions) {
      return allPass(conditions, xHolder);
    };
  }
  return !any(function (condition) {
    return !condition(x);
  })(conditions);
}

module.exports = allPass;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function append(val, arr) {
  var clone = arr.concat();
  clone.push(val);

  return clone;
}

module.exports = curry(append);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function both(x, y) {
  return function (input) {
    return x(input) && y(input);
  };
}

module.exports = curry(both);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Taken from https://github.com/getify/Functional-Light-JS/blob/master/ch4.md
var compose = function compose() {
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
};

module.exports = compose;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// taken from the last comment of https://gist.github.com/mkuklis/5294248

function curry(f) {
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return function () {
    for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
      p[_key] = arguments[_key];
    }

    return function (o) {
      return o.length >= f.length ? f.apply(undefined, _toConsumableArray(o)) : curry(f, o);
    }([].concat(_toConsumableArray(a), p));
  };
}

module.exports = curry;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var type = __webpack_require__(1);

function defaultTo(defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return function (inputArgumentHolder) {
      return defaultTo(defaultArgument, inputArgumentHolder);
    };
  }
  return inputArgument === undefined || !(type(inputArgument) === type(defaultArgument)) ? defaultArgument : inputArgument;
}

module.exports = defaultTo;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function dropLast(dropNumber, a) {

  return a.slice(0, -dropNumber);
}

module.exports = curry(dropLast);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function either(x, y) {
  return function (input) {
    return x(input) || y(input);
  };
}

module.exports = curry(either);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function find(fn, arr) {
  return arr.find(fn);
}

module.exports = curry(find);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

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

module.exports = curry(findIndex);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = flatten;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function has(prop, obj) {
  return obj[prop] !== undefined;
}

module.exports = curry(has);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function head(a) {
  if (typeof a === "string") {
    return a[0] || "";
  }

  return a[0];
}

module.exports = head;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curryThree = __webpack_require__(2);

function ifElse(conditionFn, ifFn, elseFn) {
  return function (input) {
    if (conditionFn(input) === true) {
      return ifFn(input);
    }
    return elseFn(input);
  };
}

module.exports = curryThree(ifElse);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function indexOf(question, arr) {
  var index = -1;
  var length = arr.length;

  while (++index < length) {
    if (arr[index] === question) {
      return index;
    }
  }

  return -1;
}

module.exports = curry(indexOf);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseSlice = __webpack_require__(3);

function init(a) {
  if (typeof a === "string") {
    return a.slice(0, -1);
  }

  return a.length ? baseSlice(a, 0, -1) : [];
}

module.exports = init;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = helper;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curryThree = __webpack_require__(2);

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

module.exports = curryThree(mathHelper);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = oppositeHelper;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function propHelper(method, x) {
  if (x === undefined) {
    return function (xHolder) {
      return propHelper(method, xHolder);
    };
  }

  return x[method];
}

module.exports = propHelper;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = simpleHelper;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function last(a) {
  if (typeof a === "string") {
    return a[a.length - 1] || "";
  }

  return a[a.length - 1];
}

module.exports = last;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function match(regex, str) {
  var willReturn = str.match(regex);

  return willReturn === null ? [] : willReturn;
}

module.exports = curry(match);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var type = __webpack_require__(1);

function omit(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return omit(keys, objHolder);
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
  for (var key in obj) {
    if (!keys.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

module.exports = omit;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var type = __webpack_require__(1);
var merge = __webpack_require__(10);

function partialCurry(fn) {
  var inputArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (inputArgumentsHolder) {
    if (type(fn) === "Async" || type(fn) === "Promise") {
      return new Promise(function (resolve, reject) {
        fn(merge(inputArgumentsHolder, inputArguments)).then(resolve).catch(reject);
      });
    }
    return fn(merge(inputArgumentsHolder, inputArguments));
  };
}

module.exports = partialCurry;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var type = __webpack_require__(1);

function path(pathArr, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return path(pathArr, objHolder);
    };
  }
  if (!(type(obj) === "Object")) {
    return undefined;
  }
  var holder = obj;
  var counter = 0;
  if (typeof pathArr === "string") {
    pathArr = pathArr.split(".");
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

module.exports = path;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var type = __webpack_require__(1);

function pick(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return pick(keys, objHolder);
    };
  }
  if (!(type(obj) === "Object")) {
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

module.exports = pick;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);
var map = __webpack_require__(9);

function pluck(keyToPluck, arr) {
  var willReturn = [];
  map(function (val) {
    if (!(val[keyToPluck] === undefined)) {
      willReturn.push(val[keyToPluck]);
    }
  }, arr);
  return willReturn;
}

module.exports = curry(pluck);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function prepend(val, arr) {
  var clone = arr.concat();
  clone.unshift(val);

  return clone;
}

module.exports = curry(prepend);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function prop(key, obj) {
  return obj[key];
}

module.exports = curry(prop);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curryThree = __webpack_require__(2);

function propEq(key, val, obj) {
  return obj[key] === val;
}

module.exports = curryThree(propEq);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function range(start, end) {
  var willReturn = [];
  for (var i = start; i < end; i++) {
    willReturn.push(i);
  }

  return willReturn;
}

module.exports = range;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curryThree = __webpack_require__(2);

function reduce(fn, initialValue, arr) {
  return arr.reduce(fn, initialValue);
}

module.exports = curryThree(reduce);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function repeat(a, num) {
  var willReturn = Array(num);

  return willReturn.fill(a);
}

module.exports = curry(repeat);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curryThree = __webpack_require__(2);

function replace(regex, replacer, str) {
  return str.replace(regex, replacer);
}

module.exports = curryThree(replace);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function sort(fn, arr) {
  var arrClone = arr.concat();

  return arrClone.sort(fn);
}

module.exports = curry(sort);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function sortBy(fn, arr) {
  var arrClone = arr.concat();

  return arrClone.sort(function (a, b) {
    var fnA = fn(a);
    var fnB = fn(b);
    return fnA < fnB ? -1 : fnA > fnB ? 1 : 0;
  });
}

module.exports = curry(sortBy);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function split(glue, str) {

  return str.split(glue);
}

module.exports = curry(split);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);
function splitEvery(num, a) {
  num = num > 1 ? num : 1;

  var willReturn = [];
  var counter = 0;
  while (counter < a.length) {
    willReturn.push(a.slice(counter, counter += num));
  }

  return willReturn;
}

module.exports = curry(splitEvery);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var drop = __webpack_require__(6);

function tail(arr) {

  return drop(1, arr);
}

module.exports = tail;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);
var baseSlice = __webpack_require__(3);

function take(takeNumber, a) {
  if (a === undefined) {
    return function (holder) {
      return take(takeNumber, holder);
    };
  } else if (typeof a === "string") {
    return a.slice(0, takeNumber);
  }

  return baseSlice(a, 0, takeNumber);
}

module.exports = curry(take);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseSlice = __webpack_require__(3);
var curry = __webpack_require__(0);

function takeLast(takeNumber, a) {
  var len = a.length;
  takeNumber = takeNumber > len ? len : takeNumber;

  if (typeof a === "string") {
    return a.slice(len - takeNumber);
  }
  takeNumber = len - takeNumber;

  return baseSlice(a, takeNumber, len);
}

module.exports = curry(takeLast);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function tap(fn, input) {
  fn(input);

  return input;
}

module.exports = curry(tap);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curry = __webpack_require__(0);

function test(regex, str) {
  return str.search(regex) === -1 ? false : true;
}

module.exports = curry(test);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var contains = __webpack_require__(5);

function uniq(arr) {
  var index = -1;
  var willReturn = [];
  while (++index < arr.length) {
    var value = arr[index];
    if (!contains(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

module.exports = uniq;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curryThree = __webpack_require__(2);

function update(index, newValue, arr) {
  var arrClone = arr.concat();

  return arrClone.fill(newValue, index, index + 1);
}

module.exports = curryThree(update);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function values(obj) {
  var willReturn = [];
  for (var key in obj) {
    willReturn.push(obj[key]);
  }

  return willReturn;
}

module.exports = values;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helper = __webpack_require__(30);
var mathHelper = __webpack_require__(31);
var oppositeHelper = __webpack_require__(32);
var propHelper = __webpack_require__(33);
var simpleHelper = __webpack_require__(34);

exports.add = mathHelper('+');
exports.addIndex = __webpack_require__(11);
exports.adjust = __webpack_require__(12);
exports.always = function (x) {
  return function () {
    return x;
  };
};
exports.any = __webpack_require__(4);
exports.append = __webpack_require__(15);
exports.all = __webpack_require__(13);
exports.allPass = __webpack_require__(14);
exports.both = __webpack_require__(16);
exports.compose = __webpack_require__(17);
exports.complement = function (fn) {
  return function (input) {
    return !Boolean(fn(input));
  };
};
exports.concat = oppositeHelper("concat");
exports.contains = __webpack_require__(5);
exports.curry = __webpack_require__(18);
exports.defaultTo = __webpack_require__(19);
exports.divide = mathHelper('/');
exports.drop = __webpack_require__(6);
exports.dropLast = __webpack_require__(20);
exports.either = __webpack_require__(21);
exports.endsWith = helper("endsWith");
exports.equals = __webpack_require__(7);
exports.F = function () {
  return false;
};
exports.filter = __webpack_require__(8);
exports.find = __webpack_require__(22);
exports.findIndex = __webpack_require__(23);
exports.flatten = __webpack_require__(24);
exports.has = __webpack_require__(25);
exports.head = __webpack_require__(26);
exports.identity = function (x) {
  return x;
};
exports.ifElse = __webpack_require__(27);
exports.includes = helper("includes");
exports.indexOf = __webpack_require__(28);
exports.init = __webpack_require__(29);
exports.join = helper('join');
exports.last = __webpack_require__(35);
exports.lastIndexOf = helper("lastIndexOf");
exports.length = propHelper("length");
exports.map = __webpack_require__(9);
exports.match = __webpack_require__(36);
exports.merge = __webpack_require__(10);
exports.modulo = mathHelper('%');
exports.multiply = mathHelper('*');
exports.not = function (x) {
  return !x;
};
exports.omit = __webpack_require__(37);
exports.padEnd = helper('padEnd');
exports.padStart = helper('padStart');
exports.partialCurry = __webpack_require__(38);
exports.path = __webpack_require__(39);
exports.pick = __webpack_require__(40);
exports.pluck = __webpack_require__(41);
exports.prepend = __webpack_require__(42);
exports.prop = __webpack_require__(43);
exports.propEq = __webpack_require__(44);
exports.range = __webpack_require__(45);
exports.reduce = __webpack_require__(46);
exports.repeat = __webpack_require__(47);
exports.replace = __webpack_require__(48);
exports.reverse = simpleHelper('reverse');
exports.sort = __webpack_require__(49);
exports.sortBy = __webpack_require__(50);
exports.split = __webpack_require__(51);
exports.splitEvery = __webpack_require__(52);
exports.startsWith = helper("startsWith");
exports.subtract = mathHelper('-');
exports.T = function () {
  return true;
};
exports.tap = __webpack_require__(56);
exports.tail = __webpack_require__(53);
exports.take = __webpack_require__(54);
exports.takeLast = __webpack_require__(55);
exports.test = __webpack_require__(57);
exports.toLower = simpleHelper("toLowerCase");
exports.toString = simpleHelper('toString');
exports.toUpper = simpleHelper("toUpperCase");
exports.trim = simpleHelper("trim");
exports.type = __webpack_require__(1);
exports.uniq = __webpack_require__(58);
exports.update = __webpack_require__(59);
exports.values = __webpack_require__(60);

/***/ })
/******/ ]);