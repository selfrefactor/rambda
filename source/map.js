import { _isArray } from './_internals/_isArray'
import { _keys } from './_internals/_keys'

export function mapArray(
  fn, list, isIndexed = false
){
  let index = 0
  const willReturn = Array(list.length)

  while (index < list.length){
    willReturn[ index ] = isIndexed ? fn(list[ index ], index) : fn(list[ index ])

    index++
  }

  return willReturn
}

export function mapObject(fn, obj){
  let index = 0
  const keys = _keys(obj)
  const len = keys.length
  const willReturn = {}

  while (index < len){
    const key = keys[ index ]
    willReturn[ key ] = fn(
      obj[ key ], key, obj
    )
    index++
  }

  return willReturn
}

export function map(fn, list){
  if (arguments.length === 1) return _list => map(fn, _list)
  if (list === undefined) return []
  if (_isArray(list)) return mapArray(fn, list)

  return mapObject(fn, list)
}
