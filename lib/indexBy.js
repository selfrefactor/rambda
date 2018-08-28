"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = indexBy;
function indexBy(fn, list) {
  if (arguments.length === 1) {
    return function (listHolder) {
      return indexBy(fn, listHolder);
    };
  }

  var result = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    result[fn(item)] = item;
  }

  return result;
}