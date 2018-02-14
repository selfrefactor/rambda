'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = omit;
function omit(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return omit(keys, objHolder);
    };
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }

  var keysValue = typeof keys === 'string' ? keys = keys.split(',') : keys;

  var willReturn = {};

  for (var key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}