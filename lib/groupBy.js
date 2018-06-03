"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupBy;
function groupBy(fn, list) {
  if (list === undefined) {
    return function (list) {
      return groupBy(fn, list);
    };
  }
  var result = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var key = fn(item);

    if (!result[key]) result[key] = [];

    result[key].push(item);
  }
  return result;
}