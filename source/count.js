import {_isArray} from './_internals/_isArray'

export function count(predicate, list) {
  if (arguments.length === 1) {
    return _list => count(predicate, _list)
  }
  if (!_isArray(list)) return 0

  return list.filter(x => predicate(x)).length
}
