'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dissoc;

var _omit = require('./omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dissoc(prop, obj) {
  if (arguments.length === 1) {

    return function (objHolder) {
      return dissoc(prop, objHolder);
    };
  }
  if (obj === null || obj === undefined) {
    return undefined;
  }
  var willReturn = {};

  for (var key in obj) {
    if (key !== '' + prop) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}