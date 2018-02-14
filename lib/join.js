"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = join;
function join(glue, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return join(glue, arrHolder);
    };
  }

  return arr.join(glue);
}