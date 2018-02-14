"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;
function filterObject(fn, obj) {
  var willReturn = {};

  for (var prop in obj) {
    if (fn(obj[prop], prop)) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return filter(fn, arrHolder);
    };
  }

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