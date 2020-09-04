import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'

export function forEach(fn, list){
  if (arguments.length === 1) return _list => forEach(fn, _list)

  if (list === undefined){
    return
  }

  if (_isArray(list)){
    let index = 0
    const len = list.length

    while (index < len){
      fn(list[ index ])
      index++
    }
  } else {
    let index = 0
    const keys = _keys(list)
    const len = keys.length

    while (index < len){
      const key = keys[ index ]
      fn(
        list[ key ], key, list
      )
      index++
    }
  }

  return list
}
