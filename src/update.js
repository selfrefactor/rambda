import { cloneList } from './_internals/cloneList.js'

export function update(index, newValue) {
  return list => {
    const clone = cloneList(list)
    if (index === -1) {
      return clone.fill(newValue, index)
    }

    return clone.fill(newValue, index, index + 1)
  }
}
