'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dissoc;

var _omit = require('./omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dissoc(prop, obj) {
  switch (arguments.length) {
    case 0:
      return dissoc;
    case 1:
      return function (obj) {
        return dissoc(prop, obj);
      };
  }

  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
}