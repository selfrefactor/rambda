"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;
function find(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return find(fn, arrHolder);
    };
  }

  return arr.find(fn);
}