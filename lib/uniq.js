'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniq;

var _contains = require('./contains');

var _contains2 = _interopRequireDefault(_contains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uniq(arr) {
  var index = -1;
  var willReturn = [];

  while (++index < arr.length) {
    var value = arr[index];

    if (!(0, _contains2.default)(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}