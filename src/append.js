import { cloneList } from './_internals/cloneList.js'

export function append(x) {
  return list => {
    const clone = cloneList(list)
    clone.push(x)

    return clone
  }
}
