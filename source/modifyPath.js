import { assoc } from "./assoc";
import { path as pathModule } from "./path";
import { createPath } from "./_internals/createPath";
import { _isArray } from "./_internals/_isArray";
import { _isInteger } from "./_internals/_isInteger";

function _modify(prop, fn, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[prop] = fn(arr[prop]);
    return arr;
  }

  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = fn(result[prop]);
  return result
}  

export function modifyPath(pathInput, fn, object) {
  const path = createPath(pathInput)
  if (path.length === 1) {
    return _modify(path[0], fn, object);
  }
  if(pathModule(path, object) === undefined) return object

  var val = modifyPath(Array.prototype.slice.call(path, 1), fn, object[path[0]]);
  if (val === object[path[0]]) {
    return object;
  }

  return assoc(path[0], val, object);
}
