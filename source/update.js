import {curry} from './curry'
import {cloneList} from './_internals/cloneList'

function updateFn(index, newValue, list) {
  const clone = cloneList(list)
  if (index === -1) return clone.fill(newValue, index)

  return clone.fill(newValue, index, index + 1)
}

export const update = curry(updateFn)
