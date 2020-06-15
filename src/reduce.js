import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'
import { curry } from './curry'

function reduceFn(
  reducer, acc, list
){
  if (list === undefined){
    return acc
  }

  if (_isArray(list)){
    let index = 0
    const len = list.length

    while (index < len){
      acc = reducer(
        acc, list[ index ], index, list
      )
      index++
    }
  } else {
    let index = 0
    const keys = _keys(list)
    const len = keys.length

    while (index < len){
      const key = keys[ index ]
      acc = reducer(
        acc, key, list[ key ], list
      )
      index++
    }
  }

  return acc
}

export const reduce = curry(reduceFn)
