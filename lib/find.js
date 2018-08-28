"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;
function find(fn, arr) {
  if (arguments.length === 1) {
    return function (arrHolder) {
      return find(fn, arrHolder);
    };
  }

  return arr.find(fn);
}