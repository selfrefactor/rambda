'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lastIndexOf;

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lastIndexOf(x, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return lastIndexOf(x, arrHolder);
    };
  }
  var willReturn = -1;

  arr.map(function (value, key) {
    if ((0, _equals2.default)(value, x)) {
      willReturn = key;
    }
  });

  return willReturn;
}