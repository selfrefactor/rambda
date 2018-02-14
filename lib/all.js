'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all(condition, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return all(condition, arrHolder);
    };
  }

  return (0, _filter2.default)(condition, arr).length === arr.length;
}