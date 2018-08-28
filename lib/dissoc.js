"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dissoc;
function dissoc(prop, obj) {
  if (arguments.length === 1) {
    return function (objHolder) {
      return dissoc(prop, objHolder);
    };
  }

  if (obj === null || obj === undefined) {
    return {};
  }

  var willReturn = {};
  for (var p in obj) {
    willReturn[p] = obj[p];
  }
  delete willReturn[prop];

  return willReturn;
}