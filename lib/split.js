"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = split;
function split(glue, str) {
  if (str === undefined) {
    return function (strHolder) {
      return split(glue, strHolder);
    };
  }

  return str.split(glue);
}