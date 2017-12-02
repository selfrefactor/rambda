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

    return aClone.sort().toString() === bClone.sort().toString();
  }

  if (aType === 'Object') {
    var aKeys = Object.keys(a);

    if (aKeys.length === Object.keys(b).length) {
      if (aKeys.length === 0) {
        return true;
      }
      var flag = true;

      aKeys.forEach(function (val) {
        if (flag) {
          var aValType = (0, _type2.default)(a[val]);
          var bValType = (0, _type2.default)(b[val]);

          if (aValType === bValType) {
            if (aValType === 'Object') {
              if (Object.keys(a[val]).length === Object.keys(b[val]).length) {
                if (Object.keys(a[val]).length !== 0) {
                  if (!equals(a[val], b[val])) {
                    flag = false;
                  }
                }
              } else {
                flag = false;
              }
            } else if (!equals(a[val], b[val])) {
              flag = false;
            }
          } else {
            flag = false;
          }
        }
      });

      return flag;
    }
  }

  return false;
}