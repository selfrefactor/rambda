'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(x, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return contains(x, arrHolder);
    };
  }
  var index = -1;
  var flag = false;

  while (++index < arr.length && !flag) {
    if ((0, _equals2.default)(arr[index], x)) {
      flag = true;
    }
  }

  return flag;
}