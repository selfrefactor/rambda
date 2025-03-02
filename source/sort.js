import { cloneList } from './_internals/cloneList.js'

export function sort(sortFn) {
  return list => cloneList(list).sort(sortFn)
}
