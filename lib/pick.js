'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pick;
function pick(keys, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return pick(keys, objHolder);
    };
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  var keysValue = typeof keys === 'string' ? keys.split(',') : keys;

  var willReturn = {};
  var counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    }
    counter++;
  }

  return willReturn;
}