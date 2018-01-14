"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;
function mapObject(fn, obj) {
  var willReturn = {};

  for (var prop in obj) {
    willReturn[prop] = fn(obj[prop], prop);
  }

  return willReturn;
}

function map(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return map(fn, arrHolder);
    };
  }
  if (arr.length === undefined) {
    return mapObject(fn, arr);
  }
  var index = -1;
  var len = arr.length;
  var willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(arr[index]);
  }

  return willReturn;
}