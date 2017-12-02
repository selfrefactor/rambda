"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prop;
function prop(key, obj) {
  if (obj === undefined) {
    return function (objHolder) {
      return prop(key, objHolder);
    };
  }

  return obj[key];
}