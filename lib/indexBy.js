"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = indexBy;
function indexBy(fn, list) {
  if (list === undefined) {

    return function (list) {
      return indexBy(fn, list);
    };
  }
  var result = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    result[fn(item)] = item;
  }

  return result;
}