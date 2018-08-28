'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nth;
function nth(index, list) {
  if (arguments.length === 1) return function (listHolder) {
    return nth(index, listHolder);
  };

  var idx = index < 0 ? list.length + index : index;

  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
}