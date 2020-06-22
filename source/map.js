import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'

export function map(fn, list){
  if (arguments.length === 1) return _list => map(fn, _list)

  if (list === undefined){
    return []
  }

  if (_isArray(list)){
    let index = 0
    const len = list.length
    const willReturn = Array(len)

    while (index < len){
      willReturn[ index ] = fn(
        list[ index ], index, list
      )
      index++
    }

    return willReturn
  }
  let index = 0
  const keys = _keys(list)
  const len = keys.length
  const willReturn = {}

  while (index < len){
    const key = keys[ index ]
    willReturn[ key ] = fn(
      list[ key ], key, list
    )
    index++
  }

  return willReturn
}
