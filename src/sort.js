import {cloneList} from './_internals/cloneList'

export function sort(sortFn, list) {
  if (arguments.length === 1) return _list => sort(sortFn, _list)

  return cloneList(list).sort(sortFn)
}
