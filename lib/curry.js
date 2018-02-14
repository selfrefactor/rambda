"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = curry;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//taken from the last comment of https://gist.github.com/mkuklis/5294248

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