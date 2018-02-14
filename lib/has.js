"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = has;
function has(prop, obj) {
  if (obj === undefined) {
    return function (objHolder) {
      return has(prop, objHolder);
    };
  }

  return obj[prop] !== undefined;
}