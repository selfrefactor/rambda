'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concat;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function concat(x, y) {
  if (y === undefined) {
    return function (yHolder) {
      return concat(x, yHolder);
    };
  }

  return typeof x === 'string' ? '' + x + y : [].concat(_toConsumableArray(x), _toConsumableArray(y));
}