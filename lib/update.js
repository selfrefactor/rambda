"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update(index, newValue, arr) {
  if (newValue === undefined) {
    return function (newValueHolder, arrHolder) {
      return update(index, newValueHolder, arrHolder);
    };
  } else if (arr === undefined) {
    return function (arrHolder) {
      return update(index, newValue, arrHolder);
    };
  }
  var arrClone = arr.concat();

  return arrClone.fill(newValue, index, index + 1);
}