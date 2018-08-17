"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatMap;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function flatMap(fn, xs) {
  var _ref;

  switch (arguments.length) {
    case 0:
      return flatMap;
    case 1:
      return function (xs) {
        return flatMap(fn, xs);
      };
    default:
      return (_ref = []).concat.apply(_ref, _toConsumableArray(xs.map(fn)));
  }
}