'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = takeLast;

var _baseSlice = require('./internal/baseSlice');

var _baseSlice2 = _interopRequireDefault(_baseSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function takeLast(num, x) {
  if (x === undefined) {
    return function (xHolder) {
      return takeLast(num, xHolder);
    };
  }
  var len = x.length;

  var numValue = num > len ? len : num;

  if (typeof x === 'string') {
    return x.slice(len - numValue);
  }
  numValue = len - numValue;

  return (0, _baseSlice2.default)(x, numValue, len);
}