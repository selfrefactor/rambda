'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(a, b) {
  if (arguments.length === 1) {
    return function (bHolder) {
      return equals(a, bHolder);
    };
  }

  if (a === b) {
    return true;
  }
  var aType = (0, _type2.default)(a);

  if (aType !== (0, _type2.default)(b)) {
    return false;
  }

  if (aType === 'Array') {
    var aClone = Array.from(a);
    var bClone = Array.from(b);

    if (aClone.toString() !== bClone.toString()) {

      return false;
    }
    var loopArrayFlag = true;

    aClone.forEach(function (aCloneInstance, aCloneIndex) {
      if (loopArrayFlag) {

        if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
          loopArrayFlag = false;
        }
      }
    });

    return loopArrayFlag;
  }

  if (aType === 'Object') {
    var aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {

      return false;
    }

    var loopObjectFlag = true;
    aKeys.forEach(function (aKeyInstance) {
      if (loopObjectFlag) {
        var aValue = a[aKeyInstance];
        var bValue = b[aKeyInstance];

        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false;
        }
      }
    });

    return loopObjectFlag;
  }

  return false;
}