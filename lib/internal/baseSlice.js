"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = baseSlice;
function baseSlice(array, start, end) {
  var index = -1;
  var length = array.length;

  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;

  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}