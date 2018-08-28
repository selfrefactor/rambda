"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = join;
function join(glue, arr) {
  if (arguments.length === 1) {
    return function (arrHolder) {
      return join(glue, arrHolder);
    };
  }

  return arr.join(glue);
}