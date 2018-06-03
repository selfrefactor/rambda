'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forEach;

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forEach(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return forEach(fn, arrHolder);
    };
  }

  (0, _map2.default)(fn, arr);

  return arr;
}