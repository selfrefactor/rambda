'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

var helper_1 = helper;

function curry$1(fn) {
  return function (x, y) {
    if (y === undefined) {
      return function (yHolder) {
        return fn(x, yHolder);
      };
    }
    return fn(x, y);
  };
}

var curry_1 = curry$1;

function curryThree(fn) {
  return function (x, y, z) {
    if (y === undefined) {
      var helper = function helper(yHolder, zHolder) {
        return fn(x, yHolder, zHolder);
      };
      return curry_1(helper);
    } else if (z === undefined) {
      return function (zHolder) {
        return fn(x, y, zHolder);
      };
    }
    return fn(x, y, z);
  };
}

var curryThree_1 = curryThree;

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

var mathHelper_1 = curryThree_1(mathHelper);

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

var oppositeHelper_1 = oppositeHelper;

function propHelper(method, x) {
  if (x === undefined) {
    return function (xHolder) {
      return propHelper(method, xHolder);
    };
  }

  return x[method];
}

var propHelper_1 = propHelper;

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

var simpleHelper_1 = simpleHelper;

function addIndex$1(functor) {
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

var addIndex_1 = addIndex$1;

function adjust$1(fn, index, arr) {
  var clone = arr.concat();

  return clone.map(function (val, key) {
    if (key === index) {
      return fn(arr[index]);
    }

    return val;
  });
}

var adjust_1 = curryThree_1(adjust$1);

function any$1(fn, arr) {

  var counter = 0;
  while (counter < arr.length) {
    if (fn(arr[counter])) {
      return true;
    }
    counter++;
  }

  return false;
}

var any_1 = curry_1(any$1);

function append$1(val, arr) {
  var clone = arr.concat();
  clone.push(val);

  return clone;
}

var append_1 = curry_1(append$1);

function filter$1(fn, arr) {
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

var filter_1 = curry_1(filter$1);

function all$1(condition, arr) {
  if (arguments.length === 1) {
    return function (arrHolder) {
      return all$1(condition, arrHolder);
    };
  }

  return filter_1(condition, arr).length === arr.length;
}

var all_1 = all$1;

function allPass$1(conditions, x) {
  if (arguments.length === 1) {
    return function (conditions) {
      return allPass$1(conditions, xHolder);
    };
  }
  return !any_1(function (condition) {
    return !condition(x);
  })(conditions);
}

var allPass_1 = allPass$1;

function both$1(x, y) {
  return function (input) {
    return x(input) && y(input);
  };
}

var both_1 = curry_1(both$1);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var compose_1 = createCommonjsModule(function (module) {
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
});

function type$1(a) {
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

var type_1 = type$1;

function equals$1(a, b) {
  if (a === b) {

    return true;
  }
  var aType = type_1(a);
  if (aType !== type_1(b)) {
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
          var aValType = type_1(a[val]);
          var bValType = type_1(b[val]);
          if (aValType === bValType) {
            if (aValType === "Object") {
              if (Object.keys(a[val]).length === Object.keys(b[val]).length) {
                if (Object.keys(a[val]).length !== 0) {
                  if (!equals$1(a[val], b[val])) {
                    flag = false;
                  }
                }
              } else {
                flag = false;
              }
            } else if (!equals$1(a[val], b[val])) {
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

var equals_1 = curry_1(equals$1);

function contains$1(val, arr) {
  var index = -1;
  var flag = false;
  while (++index < arr.length && !flag) {
    if (equals_1(arr[index], val)) {
      flag = true;
    }
  }

  return flag;
}

var contains_1 = curry_1(contains$1);

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// taken from the last comment of https://gist.github.com/mkuklis/5294248

function curry$3(f) {
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return function () {
    for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
      p[_key] = arguments[_key];
    }

    return function (o) {
      return o.length >= f.length ? f.apply(undefined, toConsumableArray(o)) : curry$3(f, o);
    }([].concat(toConsumableArray(a), p));
  };
}

var curry_1$2 = curry$3;

function defaultTo$1(defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return function (inputArgumentHolder) {
      return defaultTo$1(defaultArgument, inputArgumentHolder);
    };
  }
  return inputArgument === undefined || !(type_1(inputArgument) === type_1(defaultArgument)) ? defaultArgument : inputArgument;
}

var defaultTo_1 = defaultTo$1;

function drop$1(dropNumber, a) {
  return a.slice(dropNumber);
}

var drop_1 = curry_1(drop$1);

function dropLast$1(dropNumber, a) {

  return a.slice(0, -dropNumber);
}

var dropLast_1 = curry_1(dropLast$1);

function either$1(x, y) {
  return function (input) {
    return x(input) || y(input);
  };
}

var either_1 = curry_1(either$1);

function find$1(fn, arr) {
  return arr.find(fn);
}

var find_1 = curry_1(find$1);

function findIndex$1(fn, arr) {
  var length = arr.length;
  var index = -1;

  while (++index < length) {
    if (fn(arr[index])) {
      return index;
    }
  }

  return -1;
}

var findIndex_1 = curry_1(findIndex$1);

function flatten$1(arr, willReturn) {
  willReturn = willReturn === undefined ? [] : willReturn;

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten$1(arr[i], willReturn);
    } else {
      willReturn.push(arr[i]);
    }
  }

  return willReturn;
}

var flatten_1 = flatten$1;

function has$1(prop, obj) {
  return obj[prop] !== undefined;
}

var has_1 = curry_1(has$1);

function head$1(a) {
  if (typeof a === "string") {
    return a[0] || "";
  }

  return a[0];
}

var head_1 = head$1;

function ifElse$1(conditionFn, ifFn, elseFn) {
  return function (input) {
    if (conditionFn(input) === true) {
      return ifFn(input);
    }
    return elseFn(input);
  };
}

var ifElse_1 = curryThree_1(ifElse$1);

function indexOf$1(question, arr) {
  var index = -1;
  var length = arr.length;

  while (++index < length) {
    if (arr[index] === question) {
      return index;
    }
  }

  return -1;
}

var indexOf_1 = curry_1(indexOf$1);

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

var baseSlice_1 = baseSlice;

function init$1(a) {
  if (typeof a === "string") {
    return a.slice(0, -1);
  }

  return a.length ? baseSlice_1(a, 0, -1) : [];
}

var init_1 = init$1;

function last$1(a) {
  if (typeof a === "string") {
    return a[a.length - 1] || "";
  }

  return a[a.length - 1];
}

var last_1 = last$1;

function map$1(fn, arr) {
  var index = -1;
  var length = arr.length;
  var willReturn = Array(length);

  while (++index < length) {
    willReturn[index] = fn(arr[index]);
  }

  return willReturn;
}

var map_1 = curry_1(map$1);

function match$1(regex, str) {
  var willReturn = str.match(regex);

  return willReturn === null ? [] : willReturn;
}

var match_1 = curry_1(match$1);

function merge$1(obj, newProps) {
  return Object.assign({}, obj, newProps);
}

var merge_1 = curry_1(merge$1);

function omit$1(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return omit$1(keys, objHolder);
    };
  }
  if (!(type_1(obj) === 'Object')) {
    return undefined;
  }
  if (type_1(keys) === 'String') {
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

var omit_1 = omit$1;

function partialCurry$1(fn) {
  var inputArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (inputArgumentsHolder) {
    if (type_1(fn) === "Async" || type_1(fn) === "Promise") {
      return new Promise(function (resolve, reject) {
        fn(merge_1(inputArgumentsHolder, inputArguments)).then(resolve).catch(reject);
      });
    }
    return fn(merge_1(inputArgumentsHolder, inputArguments));
  };
}

var partialCurry_1 = partialCurry$1;

function path$1(pathArr, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return path$1(pathArr, objHolder);
    };
  }
  if (!(type_1(obj) === "Object")) {
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

var path_1 = path$1;

function pick$1(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return pick$1(keys, objHolder);
    };
  }
  if (!(type_1(obj) === "Object")) {
    return undefined;
  }
  if (type_1(keys) === 'String') {
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

var pick_1 = pick$1;

function pluck$1(keyToPluck, arr) {
  var willReturn = [];
  map_1(function (val) {
    if (!(val[keyToPluck] === undefined)) {
      willReturn.push(val[keyToPluck]);
    }
  }, arr);
  return willReturn;
}

var pluck_1 = curry_1(pluck$1);

function prepend$1(val, arr) {
  var clone = arr.concat();
  clone.unshift(val);

  return clone;
}

var prepend_1 = curry_1(prepend$1);

function prop$1(key, obj) {
  return obj[key];
}

var prop_1 = curry_1(prop$1);

function propEq$1(key, val, obj) {
  return obj[key] === val;
}

var propEq_1 = curryThree_1(propEq$1);

function range$1(start, end) {
  var willReturn = [];
  for (var i = start; i < end; i++) {
    willReturn.push(i);
  }

  return willReturn;
}

var range_1 = range$1;

function reduce$1(fn, initialValue, arr) {
  return arr.reduce(fn, initialValue);
}

var reduce_1 = curryThree_1(reduce$1);

function repeat$1(a, num) {
  var willReturn = Array(num);

  return willReturn.fill(a);
}

var repeat_1 = curry_1(repeat$1);

function replace$1(regex, replacer, str) {
  return str.replace(regex, replacer);
}

var replace_1 = curryThree_1(replace$1);

function sort$1(fn, arr) {
  var arrClone = arr.concat();

  return arrClone.sort(fn);
}

var sort_1 = curry_1(sort$1);

function sortBy$1(fn, arr) {
  var arrClone = arr.concat();

  return arrClone.sort(function (a, b) {
    var fnA = fn(a);
    var fnB = fn(b);
    return fnA < fnB ? -1 : fnA > fnB ? 1 : 0;
  });
}

var sortBy_1 = curry_1(sortBy$1);

function split$1(glue, str) {

  return str.split(glue);
}

var split_1 = curry_1(split$1);

function splitEvery$1(num, a) {
  num = num > 1 ? num : 1;

  var willReturn = [];
  var counter = 0;
  while (counter < a.length) {
    willReturn.push(a.slice(counter, counter += num));
  }

  return willReturn;
}

var splitEvery_1 = curry_1(splitEvery$1);

function tap$1(fn, input) {
  fn(input);

  return input;
}

var tap_1 = curry_1(tap$1);

function tail$1(arr) {

  return drop_1(1, arr);
}

var tail_1 = tail$1;

function take$1(takeNumber, a) {
  if (a === undefined) {
    return function (holder) {
      return take$1(takeNumber, holder);
    };
  } else if (typeof a === "string") {
    return a.slice(0, takeNumber);
  }

  return baseSlice_1(a, 0, takeNumber);
}

var take_1 = curry_1(take$1);

function takeLast$1(takeNumber, a) {
  var len = a.length;
  takeNumber = takeNumber > len ? len : takeNumber;

  if (typeof a === "string") {
    return a.slice(len - takeNumber);
  }
  takeNumber = len - takeNumber;

  return baseSlice_1(a, takeNumber, len);
}

var takeLast_1 = curry_1(takeLast$1);

function test$1(regex, str) {
  return str.search(regex) === -1 ? false : true;
}

var testFn = curry_1(test$1);

function uniq$1(arr) {
  var index = -1;
  var willReturn = [];
  while (++index < arr.length) {
    var value = arr[index];
    if (!contains_1(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

var uniq_1 = uniq$1;

function update$1(index, newValue, arr) {
  var arrClone = arr.concat();

  return arrClone.fill(newValue, index, index + 1);
}

var update_1 = curryThree_1(update$1);

function values$1(obj) {
  var willReturn = [];
  for (var key in obj) {
    willReturn.push(obj[key]);
  }

  return willReturn;
}

var values_1 = values$1;

var add = mathHelper_1('+');
var addIndex = addIndex_1;
var adjust = adjust_1;
var always = function always(x) {
	return function () {
		return x;
	};
};
var any = any_1;
var append = append_1;
var all = all_1;
var allPass = allPass_1;
var both = both_1;
var compose = compose_1;
var complement = function complement(fn) {
	return function (input) {
		return !Boolean(fn(input));
	};
};
var concat = oppositeHelper_1("concat");
var contains = contains_1;
var curry = curry_1$2;
var defaultTo = defaultTo_1;
var divide = mathHelper_1('/');
var drop = drop_1;
var dropLast = dropLast_1;
var either = either_1;
var endsWith = helper_1("endsWith");
var equals = equals_1;
var F = function F() {
	return false;
};
var filter = filter_1;
var find = find_1;
var findIndex = findIndex_1;
var flatten = flatten_1;
var has = has_1;
var head = head_1;
var identity = function identity(x) {
	return x;
};
var ifElse = ifElse_1;
var includes = helper_1("includes");
var indexOf = indexOf_1;
var init = init_1;
var join = helper_1('join');
var last = last_1;
var lastIndexOf = helper_1("lastIndexOf");
var length = propHelper_1("length");
var map = map_1;
var match = match_1;
var merge = merge_1;
var modulo = mathHelper_1('%');
var multiply = mathHelper_1('*');
var not = function not(x) {
	return !x;
};
var omit = omit_1;
var padEnd = helper_1('padEnd');
var padStart = helper_1('padStart');
var partialCurry = partialCurry_1;
var path = path_1;
var pick = pick_1;
var pluck = pluck_1;
var prepend = prepend_1;
var prop = prop_1;
var propEq = propEq_1;
var range = range_1;
var reduce = reduce_1;
var repeat = repeat_1;
var replace = replace_1;
var reverse = simpleHelper_1('reverse');
var sort = sort_1;
var sortBy = sortBy_1;
var split = split_1;
var splitEvery = splitEvery_1;
var startsWith = helper_1("startsWith");
var subtract = mathHelper_1('-');
var T = function T() {
	return true;
};
var tap = tap_1;
var tail = tail_1;
var take = take_1;
var takeLast = takeLast_1;
var test = testFn;
var toLower = simpleHelper_1("toLowerCase");
var toString_1 = simpleHelper_1('toString');
var toUpper = simpleHelper_1("toUpperCase");
var trim = simpleHelper_1("trim");
var type = type_1;
var uniq = uniq_1;
var update = update_1;
var values = values_1;

var rambda = {
	add: add,
	addIndex: addIndex,
	adjust: adjust,
	always: always,
	any: any,
	append: append,
	all: all,
	allPass: allPass,
	both: both,
	compose: compose,
	complement: complement,
	concat: concat,
	contains: contains,
	curry: curry,
	defaultTo: defaultTo,
	divide: divide,
	drop: drop,
	dropLast: dropLast,
	either: either,
	endsWith: endsWith,
	equals: equals,
	F: F,
	filter: filter,
	find: find,
	findIndex: findIndex,
	flatten: flatten,
	has: has,
	head: head,
	identity: identity,
	ifElse: ifElse,
	includes: includes,
	indexOf: indexOf,
	init: init,
	join: join,
	last: last,
	lastIndexOf: lastIndexOf,
	length: length,
	map: map,
	match: match,
	merge: merge,
	modulo: modulo,
	multiply: multiply,
	not: not,
	omit: omit,
	padEnd: padEnd,
	padStart: padStart,
	partialCurry: partialCurry,
	path: path,
	pick: pick,
	pluck: pluck,
	prepend: prepend,
	prop: prop,
	propEq: propEq,
	range: range,
	reduce: reduce,
	repeat: repeat,
	replace: replace,
	reverse: reverse,
	sort: sort,
	sortBy: sortBy,
	split: split,
	splitEvery: splitEvery,
	startsWith: startsWith,
	subtract: subtract,
	T: T,
	tap: tap,
	tail: tail,
	take: take,
	takeLast: takeLast,
	test: test,
	toLower: toLower,
	toString: toString_1,
	toUpper: toUpper,
	trim: trim,
	type: type,
	uniq: uniq,
	update: update,
	values: values
};

exports['default'] = rambda;
exports.add = add;
exports.addIndex = addIndex;
exports.adjust = adjust;
exports.always = always;
exports.any = any;
exports.append = append;
exports.all = all;
exports.allPass = allPass;
exports.both = both;
exports.compose = compose;
exports.complement = complement;
exports.concat = concat;
exports.contains = contains;
exports.curry = curry;
exports.defaultTo = defaultTo;
exports.divide = divide;
exports.drop = drop;
exports.dropLast = dropLast;
exports.either = either;
exports.endsWith = endsWith;
exports.equals = equals;
exports.F = F;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.flatten = flatten;
exports.has = has;
exports.head = head;
exports.identity = identity;
exports.ifElse = ifElse;
exports.includes = includes;
exports.indexOf = indexOf;
exports.init = init;
exports.join = join;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.length = length;
exports.map = map;
exports.match = match;
exports.merge = merge;
exports.modulo = modulo;
exports.multiply = multiply;
exports.not = not;
exports.omit = omit;
exports.padEnd = padEnd;
exports.padStart = padStart;
exports.partialCurry = partialCurry;
exports.path = path;
exports.pick = pick;
exports.pluck = pluck;
exports.prepend = prepend;
exports.prop = prop;
exports.propEq = propEq;
exports.range = range;
exports.reduce = reduce;
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
exports.toLower = toLower;
exports.toString = toString_1;
exports.toUpper = toUpper;
exports.trim = trim;
exports.type = type;
exports.uniq = uniq;
exports.update = update;
exports.values = values;
