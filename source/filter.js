import { _isArray } from './_internals/_isArray'

function filterObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    if (fn(
      obj[ prop ], prop, obj
    )){
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export function filter(predicate, list){
  if (arguments.length === 1) return _list => filter(predicate, _list)

  if (!list) return []

  if (!_isArray(list)){
    return filterObject(predicate, list)
  }

  let index = 0
  const len = list.length
  const willReturn = []

  while (index < len){
    const value = list[ index ]

    if (predicate(value, index)){
      willReturn.push(value)
    }

    index++
  }

  return willReturn
}
