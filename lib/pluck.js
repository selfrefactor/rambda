'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pluck;

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pluck(keyToPluck, arr) {
  if (arr === undefined) {
    return function (arrHolder) {
      return pluck(keyToPluck, arrHolder);
    };
  }
  var willReturn = [];

  (0, _map2.default)(function (val) {
    if (!(val[keyToPluck] === undefined)) {
      willReturn.push(val[keyToPluck]);
    }
  }, arr);

  return willReturn;
}