import { _isArray } from "./_isArray";

export function _isObject (item){
  if (!item) return false;

  return typeof item === 'object' && !_isArray(item);
}
