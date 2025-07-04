import { _Set } from '../src/_internals/set.js'

export function duplicateBy(fn) {
  return list => {
    const set = new _Set()

    return list.filter(item => !set.checkUniqueness(fn(item)))
  }
}
