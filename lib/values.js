"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = values;
function values(obj) {
  var willReturn = [];

  for (var key in obj) {
    willReturn.push(obj[key]);
  }

  return willReturn;
}