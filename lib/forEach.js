'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forEach;

var _tap = require('./tap');

var _tap2 = _interopRequireDefault(_tap);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forEach(fn, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return forEach(fn, arrHolder);
    };
  }

  return (0, _map2.default)((0, _tap2.default)(fn), arr);
}