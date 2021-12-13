import {curry} from './curry'
import {cloneList} from './_internals/cloneList'

function moveFn(fromIndex, toIndex, list) {
  if (fromIndex < 0 || toIndex < 0) {
    throw new Error('Rambda.move does not support negative indexes')
  }
  if (fromIndex > list.length - 1 || toIndex > list.length - 1) return list

  const clone = cloneList(list)
  clone[fromIndex] = list[toIndex]
  clone[toIndex] = list[fromIndex]

  return clone
}

export const move = curry(moveFn)
