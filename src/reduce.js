import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'
import { curry } from './curry'

function reduceFn(
  reducer, acc, list
){
  if (!_isArray(list)){
    throw new TypeError('reduce: list must be array or iterable')
  }
  let index = 0
  const len = list.length

  while (index < len){
    acc = reducer(
      acc, list[ index ], index, list
    )
    index++
  }

  return acc
}

export const reduce = curry(reduceFn)
