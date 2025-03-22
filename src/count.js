import { isArray } from './_internals/isArray.js'

export function count(predicate) {
  return list => {
    if (!isArray(list)) {
      return 0
    }

    return list.filter(x => predicate(x)).length
  }
}
