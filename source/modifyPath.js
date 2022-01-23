import { assoc } from "./assoc";
import { path as pathModule } from "./path";
import { createPath } from "./_internals/createPath";
import { _isArray } from "./_internals/_isArray";

function modify(prop, fn, obj) {
  return {
    ...obj,
    [prop]: fn(obj[prop])
  }
}  

export function modifyPath(pathInput, fn, object) {
  if(_isArray(object)) return object

  const path = createPath(pathInput)
  if (path.length === 1) {
    return modify(path[0], fn, object);
  }
  if(pathModule(path, object) === undefined) return object

  var val = modifyPath(Array.prototype.slice.call(path, 1), fn, object[path[0]]);
  if (val === object[path[0]]) {
    return object;
  }

  return assoc(path[0], val, object);
}
