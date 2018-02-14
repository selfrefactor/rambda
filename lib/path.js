'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = path;
function path(pathArr, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return path(pathArr, objHolder);
    };
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  var willReturn = obj;
  var counter = 0;

  var pathArrValue = typeof pathArr === 'string' ? pathArr = pathArr.split('.') : pathArr;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }
    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
}